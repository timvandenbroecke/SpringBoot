import React, {Component} from "react";
import DropDownLang from "../languages/dropdown/DropDownLang.js";
import { withTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { Stack } from "@mui/system";




class Header extends Component {
    constructor(){
        super();

    }

    onHamburger = () => {

    }

    render(){

        const {isAuthenticated} = this.props;

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
                    <NavLink to="/kids"><p>{this.props.t('HEADER_KIDS')}</p></NavLink>
                </div>
                <div className="header-title">
                    <h2>ＷΞＢＳＨ♢Ｐ</h2>
                </div>
                {isAuthenticated ?
                
                <div className="login">
                    <NavLink to="/cart">
                        <Stack spacing={2} direction="row" >
                            <Badge badgeContent={4} color="success" className="badge">
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

export default  withTranslation('common')(Header)