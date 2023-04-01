import React, {Component} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {deleteBasket, order} from '../redux/actions'
import basket from "../redux/reducers/basket";
import Button from '@mui/material/Button';

class Cart extends Component {

    constructor(){
        super();
        this.state = {
            sideMenu: false,
            registerModal: false,
            loginModal: false,
            isAuthenticated: false
        }
    }

    order = () => {
        this.props.dispatch(order(this.props.basket, 1));
    }


    render(){
        const {basket} = this.props;

        return(
            <div className="cart-container">
                <Paper elevation={3} className="cart">
                    
                {basket.map((item, index) => {
                    return(
                        <div style={{display: "flex"}} key={index}>
                            <ListItem className="cart-list"  component="div" disablePadding>
                                <ListItemButton>
                                <img src={item.image}/>
                                <div className="list-container">
                                    <ListItemText primary={`${item.name}`} />
                                    <ListItemText primary={`Price: ${item.price} €`} />

                                </div>
                                </ListItemButton>
                            </ListItem>
                            <IconButton color="primary" component="label" className="delete-button" onClick={() => {this.props.delete_Basket(index);
                                                                                                                    this.forceUpdate();
                                                                                                                   }}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    )
                  
                })}
                <Button onClick={() => this.order()}>Buy</Button>
                </Paper>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        basket: state.basket
   }}
   
   function mapDispatchToProps(dispatch) {
    return { 
    
      dispatch
    }
  }
   


export default compose(withTranslation('common'), connect(mapStateToProps, mapDispatchToProps))(Cart);
