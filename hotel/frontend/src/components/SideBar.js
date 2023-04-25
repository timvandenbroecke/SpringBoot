import React, {Component} from "react";

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
        window.location.replace('http://localhost:3000/' + name);
        if(name !== this.state.last_active) this.setState({[name]: true, [this.state.last_active]: false, last_active: name});
    }


    render(){

        const {sidebar_active_1, sidebar_active_2, sidebar_active_3, sidebar_active_4} = this.state;

        return(
            <div className="sidebar">
                <ul className="side-nav">
                    <li onClick={() => this.handleSidebarActive("hotel")}  className={!sidebar_active_1 ? "side-nav__item" : "side-nav__item  side-nav__item--active"}>
                        <a href="#" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use href={sprite + "#icon-home"} />
                            </svg>
                            <span>Hotel</span>
                        </a>
                    </li>
                    <li onClick={() => this.handleSidebarActive("flight")} className={!sidebar_active_2 ? "side-nav__item" : "side-nav__item  side-nav__item--active"}>
                        <a href="#" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use href={sprite + "#icon-aircraft-take-off"} />
                            </svg>
                            <span>Flight</span>
                        </a>
                    </li>
                    <li onClick={() => this.handleSidebarActive("car_rental")}  className={!sidebar_active_3 ? "side-nav__item" : "side-nav__item  side-nav__item--active"}>
                        <a href="#" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use href={sprite + "#icon-key"} />
                            </svg>
                            <span>Car rental</span>
                        </a>
                    </li>
                    <li onClick={() => this.handleSidebarActive("tours")}  className={!sidebar_active_4 ? "side-nav__item" : "side-nav__item  side-nav__item--active"}>
                        <a href="#" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use href={sprite + "#icon-map"} />
                            </svg>
                            <span>Tours</span>
                        </a>
                    </li>
                </ul>
                <div className="legal">
                    &copy; 2020 by Hotel. All rights reserved.
                </div>
            </div>
        );
    }
}

export default SideBar;