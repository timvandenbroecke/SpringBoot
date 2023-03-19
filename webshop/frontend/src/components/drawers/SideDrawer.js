import React, {Component} from "react";
import { withTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
class SideDrawer extends Component {


    render(){

        return(
        <Drawer
            className="sidedrawer"
            anchor={"left"}
            open={this.props.sideMenu}
            onClose={this.props.onHamburger}
        >

        <List>
            uh
        </List>
        <Divider />
            <List>
              <NavLink to="/" className="side-text">
                <ListItem disablePadding>
                    <ListItemButton onClick={() => this.props.onHamburger()}>
                        <ListItemText  primary={this.props.t('HEADER_HOME')} />
                    </ListItemButton>
                </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/watches" className="side-text">
                <ListItem disablePadding>
                    <ListItemButton onClick={() => this.props.onHamburger()}>
                        <ListItemText style={{ fontWeight: "700", lineHeight: "1.6" }} primary={this.props.t('HEADER_WATCH')} />
                    </ListItemButton>
                </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/jewelry" className="side-text">
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => this.props.onHamburger()}>
                        <ListItemText primary={this.props.t('HEADER_JEWELRY')} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/clothes" className="side-text">
                <ListItem disablePadding>
                    <ListItemButton onClick={() => this.props.onHamburger()}>
                            <ListItemText  primary={this.props.t('HEADER_CLOTHES')} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/kids" className="side-text">
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => this.props.onHamburger()}>
                            <ListItemText primary={this.props.t('HEADER_KIDS')} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <Divider />
            </List>
        </Drawer>
        );
    }
}

export default withTranslation("common")(SideDrawer)