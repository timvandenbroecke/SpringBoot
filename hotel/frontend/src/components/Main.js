import React, {Component} from "react";
import CustomCarousel from "./common/Carousel";

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
              
                <div className="hotel-view__carousel">
                    <CustomCarousel className="hotel-view__carousel-item" />
                </div>
            </div>
        );
    }
}

export default Main;