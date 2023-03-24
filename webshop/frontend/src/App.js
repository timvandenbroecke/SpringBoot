import React, {Component} from "react";
import {
  Routes, 
  Route,
} from "react-router-dom";
import SideDrawer from "./components/drawers/SideDrawer";
import Modals from "./components/modals/Modals";

import Main from "./components/Main";
import Header from "./components/Header";
import Watches from "./components/Watches";
import Jewelry from "./components/Jewelry";
import Clothes from "./components/Clothes";
import Kids from "./components/Kids";
import Login from "./components/Login";
import AlertSnack from "./components/alert/AlertSnack";
import RegisterStepper from "./components/stepper/RegisterStepper";
import { connect } from 'react-redux'
import {authenticateUser} from './redux/actions/index';
import { AUTHENTICATE_USER_JWT } from "./redux/constants/action-types";
import Cart from "./components/Cart";
import {deleteBasket} from './redux/actions';


import "./sass/main.scss";




class App extends Component {
  constructor(){
    super();
    this.state = {
      sideMenu: false,
      registerModal: false,
      loginModal: false,
      isAuthenticated: false
    }
  }

  
  shouldComponentUpdate(nextProps, nextState){


    if(nextProps.basket !== this.props.basket){

        return true;
    }
    if(nextState.isAuthenticated !== this.state.isAuthenticated){

      return true;
  }


    return false;
}

  async componentDidMount(){

    if(localStorage.getItem("token")){
        const payload = await this.props.dispatch(authenticateUser(localStorage.getItem("token")));

        if(payload.payload.username){
          this.setState({isAuthenticated: true});
        }
      }
  }

  delete_Basket = (index) => {

    let array = this.props.basket;

    array.splice(index, 1)
   this.props.dispatch(deleteBasket(array));
   this.forceUpdate();
}


  onHamburger = () => {
    this.setState({sideMenu: !this.state.sideMenu});
  }

  onClickRegister = () => {
    this.setState({registerModal: true});
  }

  onCloseRegister = () => {
    this.setState({registerModal: false});
  }

  onClickLogin = () => {
    this.setState({loginModal: true});
  }

  onCloseLogin = () => {
    this.setState({loginModal: false});
  }


  render(){

    const {sideMenu, registerModal, loginModal, isAuthenticated} = this.state;
    const {login} = this.props;



    return (
      <div className="App">
        <Header onHamburger={this.onHamburger}
                onClickRegister={this.onClickRegister}
                onClickLogin={this.onClickLogin}
                isAuthenticated={(isAuthenticated) || (login.token)}
                cartLength={this.props.basket.length}
        />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/watches" element={<Watches />} />
            <Route exact path="/jewelry" element={<Jewelry />} />
            <Route exact path="/clothes" element={<Clothes />} />
            <Route exact path="/kids" element={<Kids />} />
            <Route exact path="/cart" element={<Cart delete_Basket={this.delete_Basket}/>}/>
            <Route path='*' element={<Main />}/>
          </Routes>
        <SideDrawer onHamburger={this.onHamburger} sideMenu={sideMenu} />
        <Modals open={registerModal}
                onClose={this.onCloseRegister} 
        >
          <RegisterStepper onCloseRegister={this.onCloseRegister} />
        </Modals>
        <Modals open={loginModal}
                onClose={this.onCloseLogin} 
        >
          <Login 
            onCloseLogin={this.onCloseLogin}
          />
        </Modals>
        <AlertSnack/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
  basket: state.basket,
  openAlert: state.alert.openAlert,
  messageAlert: state.alert.messageAlert,
  severityAlert: state.alert.severityAlert,
  token: state.login.token,
  userAuthenticated: state.userAuthenticated,
  login: state.login
 }}
 
 function mapDispatchToProps(dispatch) {
  return { 
    authenticateUser: () => dispatch(authenticateUser),
    dispatch
  }
}
 


export default connect(mapStateToProps, mapDispatchToProps)(App)
