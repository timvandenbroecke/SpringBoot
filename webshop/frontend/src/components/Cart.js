import React, {Component} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {deleteBasket, order, clearBasket} from '../redux/actions'
import basket from "../redux/reducers/basket";
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

class Cart extends Component {

    constructor(){
        super();
        this.state = {
            sideMenu: false,
            registerModal: false,
            loginModal: false,
            isAuthenticated: false,
            isOrdered: false
        }
    }

    order = () => {
        this.props.dispatch(order(this.props.basket));
        this.setState({isOrdered: true});
    }


    render(){
        const {basket, order} = this.props;
        const {isOrdered} = this.state;
        let isBasket = false;

        if(basket.length > 0){
            isBasket = true;
        }

        let totalprice = 0;
        this.props.basket.forEach(element => {
            totalprice += element.price;
        });

        let _order = [];
        if(order.length > 0){
            order.forEach((el, index )=>{

                const orderEll = {

                    id: basket[index].id, 
                    name: basket[index].name,
                    price: basket[index].price,
                    image: basket[index].image,
                    ordered: el.ordered
                }
                _order.push(orderEll);
            });
        }


        return(
            <div className="cart-container">
                {!isOrdered ?
                <Paper elevation={3} className="cart">
                    
                {basket.map((item, index) => {

                    
                    return(
                        <div style={{display: "flex"}} key={index}>
                            <ListItem className="cart-list"  component="div" disablePadding>
                                <ListItemButton>
                                <img src={item.image}/>
                                <div className="list-container">
                                    <ListItemText primary={`${item.name}`} />
                                    <ListItemText primary={`Price: ${item.price} €`} />

                                </div>
                                </ListItemButton>
                            </ListItem>
                            
                            <IconButton color="primary" component="label" className="delete-button" onClick={() => {this.props.delete_Basket(index);
                                                                                                                    this.forceUpdate();
                                                                                                                   }}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    )
                  
                })}
                <div className="checkout">
                { isBasket ?
                    <Button onClick={() => this.order()}>{this.props.t('BUY')}</Button>
                    :
                    null
                }
                    <h3>{this.props.t('TOTAL_PRICE') + totalprice + " €"}</h3>
                </div>
              
                </Paper>

                :
                <div>
                    <Paper elevation={3} >
                    { _order.map((item, index) => {
                        return (
                            
                            <div style={{display: "flex"}} key={index}>
                                <ListItem className="cart-list"  component="div" disablePadding>
                                    <ListItemButton>
                                    <img src={item.image}/>
                                    <div className="list-container">
                                        <ListItemText primary={`${item.name}`} />
                                        <ListItemText primary={`Price: ${item.price} €`} />
        
                                    </div>
                                    <div className="list-icon">
                                        {item.ordered ? <h2>{this.props.t('ITEM_ORDER_SUCCESS')}</h2> : <h2>{this.props.t('ITEM_ORDER_FAIL')}</h2>}
                                        {item.ordered ? <DoneIcon className="icon-success" /> : <CloseIcon className="icon-fail"/>}
                                    </div>
                                    </ListItemButton>
                                </ListItem>
                            </div>
                        
                        );
                    })
                    }
                    </Paper>
                </div>
                }

               

            </div>
        );
    }
}

function mapStateToProps(state){

    return {
        basket: state.basket,
        order: state.order
   }}
   
   function mapDispatchToProps(dispatch) {
    return { 
    
      dispatch
    }
  }
   


export default compose(withTranslation('common'), connect(mapStateToProps, mapDispatchToProps))(Cart);
