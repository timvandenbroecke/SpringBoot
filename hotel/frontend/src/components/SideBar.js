import React, {Component} from "react";
import { Link } from "react-router-dom";

import sprite from "../svg/sprite.svg";

class SideBar extends Component {
    constructor(){
        super();

        this.state = {
            hotel: true,
            flight: false,
            car_rental: false,
            tours: false,
            last_active: "hotel"
        }
    }


    handleSidebarActive = (name) => {
        if(name !== this.state.last_active) this.setState({[name]: true, [this.state.last_active]: false, last_active: name});
    }


    render(){

        const {hotel, flight, car_rental, tours} = this.state;

        return(
            <div className="sidebar">
                <ul className="side-nav">
                    <Link to="/hotel" preventScrollReset={true} className="link">
                        <li onClick={() => this.handleSidebarActive("hotel")}  className={!hotel ? "side-nav__item" : "side-nav__item  side-nav__item--active"}>
                            <a href="#" className="side-nav__link">
                                <svg className="side-nav__icon">
                                    <use href={sprite + "#icon-home"} />
                                </svg>
                                <span>Hotel</span>
                            </a>
                        </li>
                    </Link>
                    <Link to="/flight" preventScrollReset={true} className="link">
                        <li onClick={() => this.handleSidebarActive("flight")} className={!flight ? "side-nav__item" : "side-nav__item  side-nav__item--active"}>
                            <a href="#" className="side-nav__link">
                                <svg className="side-nav__icon">
                                    <use href={sprite + "#icon-aircraft-take-off"} />
                                </svg>
                                <span>Flight</span>
                            </a>
                        </li>
                    </Link>
                    <Link to="/car_rental" preventScrollReset={true} className="link">
                        <li onClick={() => this.handleSidebarActive("car_rental")}  className={!car_rental ? "side-nav__item" : "side-nav__item  side-nav__item--active"}>
                            <a href="#" className="side-nav__link">
                                <svg className="side-nav__icon">
                                    <use href={sprite + "#icon-key"} />
                                </svg>
                                <span>Car rental</span>
                            </a>
                        </li>
                    </Link>
                    <Link to="/tours" preventScrollReset={true} className="link">
                        <li onClick={() => this.handleSidebarActive("tours")}  className={!tours ? "side-nav__item" : "side-nav__item  side-nav__item--active"}>
                            <a href="#" className="side-nav__link">
                                <svg className="side-nav__icon">
                                    <use href={sprite + "#icon-map"} />
                                </svg>
                                <span>Tours</span>
                            </a>
                        </li>
                    </Link>
                </ul>
                <div className="legal">
                    &copy; 2020 by Hotel. All rights reserved.
                </div>
            </div>
        );
    }
}

export default SideBar;