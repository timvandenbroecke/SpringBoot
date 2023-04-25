import React, {Component} from "react";

import logo from "../img/logo.png";
import user from "../img/user.jpg";
import sprite from "../svg/sprite.svg";

class Header extends Component {
    constructor(){
        super();

        this.state = {
            search: ""
        }
    }


    onHandleSearch = (event) => {
        
        this.setState({search: event.target.value});
    }

    onClickSearch = () => {

    }

    render(){
        const {search} = this.state;
        return(
            <header className="header">
                <img src={logo} alt="logo" className="logo" />
                <form action="#" className="search">
                    <input value={search} onChange={(e) => this.onHandleSearch(e)} type="text" className="search__input" placeholder="Search hotels"/>
                    <button className="search__button" onClick={() => this.onClickSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="search__icon">
                            <use href={sprite + "#icon-magnifying-glass"} />
                        </svg>
                    </button>
                </form>
                <nav className="user-nav">
                    <div className="user-nav__icon-box" onClick={() => window.location.replace('http://localhost:3000/' + "bookmark")}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="user-nav__icon">
                            <use href={sprite + "#icon-bookmark"} />
                        </svg>
                        <span className="user-nav__notification">7</span>
                    </div>
                    <div className="user-nav__icon-box"  onClick={() => window.location.replace('http://localhost:3000/' + "notification")}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="user-nav__icon">
                            <use href={sprite + "#icon-chat"} />
                        </svg>
                        <span className="user-nav__notification">13</span>
                    </div>
                    <div className="user-nav__user" onClick={() => window.location.replace('http://localhost:3000/' + "profile")}>
                        <img src={user} className="user-nav__user-photo" />
                        <span className="user-nav__user-name">Jonas</span>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;