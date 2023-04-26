import React, {Component} from "react";
import {
  Routes, 
  Route,
  Navigate
} from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HotelView from "./components/HotelView";
import Notification from "./components/Notifcation";
import Profile from "./components/Profile";
import BookMark from "./components/BookMark";
import Flight from "./components/Flight";
import CarRental from "./components/CarRental";
import Tours from "./components/Tours";
import SearchView from "./components/common/SearchView";

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
            <Route path='*' element={<Main />}/>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/hotel" element={<HotelView />} />
            <Route exact path="/bookmark" element={<BookMark />} />
            <Route exact path="/notification" element={<Notification />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/flight" element={<Flight />} />
            <Route exact path="/car_rental" element={<CarRental />} />
            <Route exact path="/tours" element={<Tours />} />
            <Route exact path="/search" element={<SearchView />} />
          </Routes>
        </div>
        
      </div>
    );
  }


}

export default App;
