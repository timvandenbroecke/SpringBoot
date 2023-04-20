import React, {Component} from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

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
          <Main />
        </div>
        
      </div>
    );
  }


}

export default App;
