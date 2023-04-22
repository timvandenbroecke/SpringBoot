import React, {Component} from "react";

import sprite from '../svg/sprite.svg';
import hotel1 from '../img/hotel-1.jpg';
import hotel2 from '../img/hotel-2.jpg';
import hotel3 from '../img/hotel-3.jpg';
import user1 from '../img/user-1.jpg';
import user2 from '../img/user-2.jpg';
import user3 from '../img/user-3.jpg';
import user4 from '../img/user-4.jpg';




class Main extends Component {
    constructor(){
        super();

        this.state = {

        }
    }



    render(){

        return(
            <div className="hotel-view">
                <div className="gallery">
                    <figure className="gallery__item">
                        <img src={hotel1} alt="" className="gallery__photo" />
                    </figure>
                    <figure className="gallery__item">
                        <img src={hotel2} alt="" className="gallery__photo" />
                    </figure>
                    <figure className="gallery__item">
                        <img src={hotel3} alt="" className="gallery__photo" />
                    </figure>
                </div>
                <div className="overview">
                    <h1 className="overview__heading">
                        Hotel Los Palmas
                    </h1>
                    <div className="overview__star">
                        <svg className="overview__icon-star">
                            <use href={sprite + "#icon-star"} />
                        </svg>
                        <svg className="overview__icon-star">
                            <use href={sprite + "#icon-star"} />
                        </svg>
                        <svg className="overview__icon-star">
                            <use href={sprite + "#icon-star"} />
                        </svg>
                        <svg className="overview__icon-star">
                            <use href={sprite + "#icon-star"} />
                        </svg>
                        <svg className="overview__icon-star">
                            <use href={sprite + "#icon-star"} />
                        </svg>
                    </div>
                    <div className="overview__location">
                        <svg className="overview__icon-location">
                            <use href={sprite + "#icon-location-pin"} />
                        </svg>
                        <button className="btn_inline">Albufeira, Portugal</button>
                    </div>
                    <div className="overview__rating">
                        <div className="overview__rating-average">8.6</div>
                        <div className="overview__rating-count">3 views</div>
                    </div>
                </div>
                <div className="detail">
                    <div className="description">
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec ut scelerisque eros, vitae interdum ante.
                            Vestibulum iaculis, nisi vel auctor consequat, lorem risus pretium enim, at fringilla quam ligula pulvinar tortor. 
                        </p>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec ut scelerisque eros, vitae interdum ante.
                            Vestibulum iaculis, nisi vel auctor consequat, lorem risus pretium enim, at fringilla quam ligula pulvinar tortor. 
                        </p>
                        <ul className="list">
                            <li className="list__items">Close to the beach</li>
                            <li className="list__items">Breakfast included</li>
                            <li className="list__items">Free airport shuttle</li>
                            <li className="list__items">Free WiFi in all rooms</li>
                            <li className="list__items">Air conditioning and heating</li>
                            <li className="list__items">Pets allowed</li>
                            <li className="list__items">We speak all languages</li>
                            <li className="list__items">Perfect for families</li>
                        </ul>
                        <div className="recommend">
                            <p className="recommend__count">4 other people recommended this hotel.</p>
                        </div>
                        <div className="recommend__friends">
                            <img className="recommend__photo" src={user1} />
                            <img className="recommend__photo" src={user2} />
                            <img className="recommend__photo" src={user3} />
                            <img className="recommend__photo" src={user4} />
                        </div>
                    </div>  
                    <figure className="user-reviews">
                        <figure className="review">
                            <blockquote className="review__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Donec ut scelerisque eros, vitae interdum ante.
                                Vestibulum iaculis, nisi vel auctor consequat, lorem risus pretium enim, at fringilla quam ligula pulvinar tortor. 
                            </blockquote>
                            <figcaption className="review__user">
                                <img src={user1} alt="img" className="review__photo" />
                                <div className="review__user-box">
                                    <p className="review__user-name">Nick smith</p>
                                    <p className="review__user-date">Feb 23rd, 2017</p>
                                </div>
                                <div className="review__rating">7.8</div>
                            </figcaption>
                        </figure>
                    </figure>
                    <figure className="user-reviews">
                        <figure className="review">
                            <blockquote className="review__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Donec ut scelerisque eros, vitae interdum ante.
                                Vestibulum iaculis, nisi vel auctor consequat, lorem risus pretium enim, at fringilla quam ligula pulvinar tortor. 
                            </blockquote>
                            <figcaption className="review__user">
                                <img src={user1} alt="img" className="review__photo" />
                                <div className="review__user-box">
                                    <p className="review__user-name">Mary Thomas</p>
                                    <p className="review__user-date">Sep 17th, 2017</p>
                                </div>
                                <div className="review__rating">9.3</div>
                            </figcaption>
                        </figure>
                    </figure>
                </div>

            </div>
        );
    }
}

export default Main;