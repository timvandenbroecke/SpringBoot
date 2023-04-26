import React, {useState} from "react";
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {searchHotel} from '../redux/actions/searchAction.js';

import logo from "../img/logo.png";
import user from "../img/user.jpg";
import sprite from "../svg/sprite.svg";

export default function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    // Redux props
    const search = useSelector((state) => state.search);

    const onHandleSearch = (event) => {
        
        dispatch(searchHotel(event.target.value));
    }

    const onClickSearch = (event) => {
    
        event.preventDefault();
        navigate('/search');
    }

        return(
            <header className="header">
                <img src={logo} alt="logo" className="logo" />
                <form action="#" className="search">
                    <input value={search} onChange={(e) => onHandleSearch(e)} type="text" className="search__input" placeholder="Search hotels"/>
                    <button className="search__button" onClick={(event) => onClickSearch(event)} onKeyDown={(event) => onClickSearch(event)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="search__icon">
                            <use href={sprite + "#icon-magnifying-glass"} />
                        </svg>
                    </button>
                </form>
                <nav className="user-nav">
                    <Link to="/bookmark" preventScrollReset={true} className="link">
                        <div className="user-nav__icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" className="user-nav__icon">
                                <use href={sprite + "#icon-bookmark"} />
                            </svg>
                            <span className="user-nav__notification">7</span>
                        </div>
                    </Link>
                    <Link to="/notification" preventScrollReset={true} className="link">
                        <div className="user-nav__icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" className="user-nav__icon">
                                <use href={sprite + "#icon-chat"} />
                            </svg>
                            <span className="user-nav__notification">13</span>
                        </div>
                    </Link>
                    <Link to="/profile" preventScrollReset={true} className="link">
                        <div className="user-nav__user">
                            <img src={user} className="user-nav__user-photo" />
                            <span className="user-nav__user-name">Jonas</span>
                        </div>
                    </Link>
                </nav>
            </header>
        );
    
}

