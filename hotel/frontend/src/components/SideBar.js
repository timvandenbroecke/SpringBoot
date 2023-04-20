import React, {Component} from "react";

import sprite from "../svg/sprite.svg";

class SideBar extends Component {
    constructor(){
        super();

        this.state = {
            sidebar_active_1: true,
            sidebar_active_2: false,
            sidebar_active_3: false,
            sidebar_active_4: false,
            last_active: "sidebar_active_1"
        }
    }


    handleSidebarActive = (name) => {
        if(name !== this.state.last_active) this.setState({[name]: true, [this.state.last_active]: false, last_active: name});
    }


    render(){

        const {sidebar_active_1, sidebar_active_2, sidebar_active_3, sidebar_active_4} = this.state;

        return(
            <div className="sidebar">
                <ul className="side-nav">
                    <li onClick={() => this.handleSidebarActive("sidebar_active_1")}  className={!sidebar_active_1 ? "side-nav__item" : "side-nav__item  side-nav__item--active"}>
                        <a href="#" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use href={sprite + "#icon-home"} />
                            </svg>
                            <span>Hotel</span>
                        </a>
                    </li>
                    <li onClick={() => this.handleSidebarActive("sidebar_active_2")} className={!sidebar_active_2 ? "side-nav__item" : "side-nav__item  side-nav__item--active"}>
                        <a href="#" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use href={sprite + "#icon-aircraft-take-off"} />
                            </svg>
                            <span>Flight</span>
                        </a>
                    </li>
                    <li onClick={() => this.handleSidebarActive("sidebar_active_3")}  className={!sidebar_active_3 ? "side-nav__item" : "side-nav__item  side-nav__item--active"}>
                        <a href="#" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use href={sprite + "#icon-key"} />
                            </svg>
                            <span>Car rental</span>
                        </a>
                    </li>
                    <li onClick={() => this.handleSidebarActive("sidebar_active_4")}  className={!sidebar_active_4 ? "side-nav__item" : "side-nav__item  side-nav__item--active"}>
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