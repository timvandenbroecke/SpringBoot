import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-material-ui-carousel';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';


export default function CustomCarousel(){

    const { t, i18n } = useTranslation("common");
    const dispatch = useDispatch();

    let items = [
        {
            className: "watches-carousel",

        },
        {
            className: "clothes-carousel",

        },
        {
            className: "watches-jewelry",
        }
    ]

    return (
        <div className='carousel-container'>
            <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
        </div>
      );
}

function Item(props)
{
    return (
        <Paper className={props.item.className}>
            

        </Paper>
    )
}