import React, {Component} from "react";
import DropDownLang from "../languages/dropdown/DropDownLang.js";
import { withTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { Stack } from "@mui/system";
import { connect } from 'react-redux'
import { compose } from 'redux';




class Header extends Component {
    constructor(){
        super();

    }

    onHamburger = () => {

    }

 

    render(){

        const {isAuthenticated, basket, cartLength} = this.props;

        const basketNumber = basket.length;

        return(
            <div className="header">

                <div className="hamburger">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => this.props.onHamburger()}
                    >
                        <MenuIcon fontSize={"large"} />
                    </IconButton>
                </div>
                <div className="left_links">    
                    <NavLink to="/watches">{this.props.t('HEADER_WATCH')}</NavLink>
                    <NavLink to="/jewelry">{this.props.t('HEADER_JEWELRY')}</NavLink>
                    <NavLink to="/clothes"><p>{this.props.t('HEADER_CLOTHES')}</p></NavLink>
                </div>
                <div className="header-title">
                <NavLink to="/" style={{ cursor: "default",  textDecoration: "none", color: "black"}}><h2>ＷΞＢＳＨ♢Ｐ</h2></NavLink>
                </div>
                {isAuthenticated ?
                
                <div className="login">
                     <NavLink to="/profile">
                        <Stack spacing={2} direction="row" style={{paddingRight: "2em"}} >
                            <PersonIcon className="cart"/>
                        </Stack>
                    </NavLink>
                    <NavLink to="/cart">
                        <Stack spacing={2} direction="row" >
                            <Badge badgeContent={cartLength} color="success" className="badge">
                                <ShoppingCartIcon className="cart"/>
                            </Badge>
                        </Stack>
                    </NavLink>
                    <DropDownLang/>
                </div>
                :
                <div className="login">
                    
                    <p onClick={() => this.props.onClickLogin()}>{this.props.t('LOGIN')}</p>
                    <p onClick={() => this.props.onClickRegister()}>{this.props.t('REGISTER')}</p>
                    <DropDownLang/>
                    
                </div>
                }
          
               
            </div>
        );
    }

}

function mapStateToProps(state){

    return {
        basket: state.basket
   }}
   
   function mapDispatchToProps(dispatch) {
    return { 
    
      dispatch
    }
  }
   


export default compose(withTranslation('common'), connect(mapStateToProps, mapDispatchToProps))(Header);
