import React, {Component} from "react";

import sprite from "../svg/sprite.svg";

class SideBar extends Component {
    constructor(){
        super();

        this.state = {

        }
    }



    render(){

        return(
            <div className="sidebar">
                <ul className="side-nav">
                    <li className="side-nav__item">
                        <a href="#" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use href={sprite + "#icon-home"} />
                            </svg>
                            <span>Hotel</span>
                        </a>
                    </li>
                    <li className="side-nav__item">
                        <a href="#" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use href={sprite + "#icon-aircraft-take-off"} />
                            </svg>
                            <span>Flight</span>
                        </a>
                    </li>
                    <li className="side-nav__item">
                        <a href="#" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use href={sprite + "#icon-key"} />
                            </svg>
                            <span>Car rental</span>
                        </a>
                    </li>
                    <li className="side-nav__item">
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