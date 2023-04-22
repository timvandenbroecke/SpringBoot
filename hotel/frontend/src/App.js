import React, {Component} from "react";
import {
  Routes, 
  Route,
  Navigate
} from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import SideBar from "./components/SideBar";


function Protected({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }
  return children
}



class App extends Component {
  constructor(){
    super();

    this.state = {
      
    }
  }

  render(){
    return (
      <div className="container">
        <Header />
        <div className="content">
          <SideBar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path='*' element={<Main />}/>
          </Routes>
        </div>
        
      </div>
    );
  }


}

export default App;
