import React, {Component} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




class Cart extends Component {

    constructor(){
        super();
        this.state = {
            sideMenu: false,
            registerModal: false,
            loginModal: false,
            isAuthenticated: false
        }
    }

    render(){


        return(
            <div>
                <h1>Cart</h1>
            </div>
        );
    }
}

export default Cart