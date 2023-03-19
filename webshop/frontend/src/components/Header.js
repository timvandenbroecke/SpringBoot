import React, {Component} from "react";
import DropDownLang from "../languages/dropdown/DropDownLang.js";
import { withTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

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
                
                <div>
                    Profile
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