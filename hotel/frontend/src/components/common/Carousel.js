import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import "./carousel.scss";

function Item(props){

    console.log(props);
    
    
        return(
        <Paper className='carousel-paper'>
            <h2 className='carousel-paper__name'>{props.item.name}</h2>
            <div className='carousel-paper__image'>

                <img className='carousel-paper__image-item' src={props.item.img1} />
                <img className='carousel-paper__image-item' src={props.item.img2} />
                <img className='carousel-paper__image-item' src={props.item.img3} />
            </div>
            <div className='carousel-paper__description'>
                <p>{props.item.description}</p>
            </div>
            
        </Paper>
        );
}


export default function CustomCarousel() {

    var items = [

            {
                name: "HOTEL DELTA",
                country: "Portugal",
                place: "Albufeira",
                description: "Old city of Lisabon, 9 km from the city center",
                score: 7.2,
                img1: "https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                img2: "https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                img3: "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                star: 3
            },
            {
                name: "HOTEL QAUANT",
                country: "Portugal",
                place: "Albufeira",
                description: "Old city of Lisabon, 5 km from the city center",
                score: 7.2,
                img1: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                img2: "https://images.pexels.com/photos/6127330/pexels-photo-6127330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                img3: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                star: 3
            },
            {
                name: "HOTEL GIGA",
                country: "Portugal",
                place: "Albufeira",
                description: "Old city of Lisabon, 19 km from the city center",
                score: 7.2,
                img1: "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                img2: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                img3: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                star: 3
            },
        

    ];



  const [current, setCurrent] = React.useState(0);

  return (
    <div className='carousel'>
        <div className='carousel__container'>
            <Carousel 
            className='carousel__container-item'
            indicators={false}
            navButtonsAlwaysVisible={true}
            >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>
    </div>
  );
}