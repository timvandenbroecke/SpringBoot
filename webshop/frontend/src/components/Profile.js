import React, {Component} from "react";
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {getAllOrders, authenticateUser} from '../redux/actions'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  


class Profile extends Component {
    constructor(){
        super();
        this.state = {
            value: 0
        }
    }

    componentDidMount(){
        this.props.dispatch(getAllOrders())
        this.props.dispatch(authenticateUser(localStorage.getItem("token")));
    }

      handleChange = (event, newValue) => {
        this.setState({value: newValue});
      };

    render(){

        const {value} = this.state;
        const {t, authenticateUser, orders} = this.props;

        return (
            <div className="profile-container">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={this.handleChange} aria-label="basic tabs example">
                            <Tab label={t("PROFILE")} {...a11yProps(0)} />
                            <Tab label={t("ORDERS")} {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Paper style={{padding: "2em"}}>
                            <div className="tab-1">
                                <div className="text-left">
                                    <h3>{t("USERNAME")}:</h3>
                                    <h3>{t("ADDRESS")}:</h3>
                                    <h3>{t("CITY")}:</h3>
                                    <h3>{t("POSTCODE")}:</h3>
                                    <h3>{t("PROVINCE")}:</h3>
                                    <h3>{t("COUNTRY")}:</h3>
                                </div>
                                <div className="text-right">
                                    <h3>{authenticateUser.username}</h3>
                                    <h3>{authenticateUser.adress}</h3>
                                    <h3>{authenticateUser.city}</h3>
                                    <h3>{authenticateUser.postcode}</h3>
                                    <h3>{authenticateUser.province}</h3>
                                    <h3>{authenticateUser.country}</h3>
                                </div>
                            </div>
                        </Paper>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Paper>
                        {   orders.map((item, index) => {
                                return(
                                    <div style={{display: "flex"}} key={index}>
                                        <ListItem className="order-list"  component="div" disablePadding>
                                            <ListItemButton>
                                            <img src={item.image}/>
                                            <div className="list-container">
                                                <ListItemText primary={`${item.name}`} />
                                                <ListItemText primary={`Price: ${item.price} €`} />
                                            </div>
                                            </ListItemButton>
                                        </ListItem>
                                    </div>
                                );
                            })
                        }
                        </Paper>
                    </TabPanel>
                </Box>
            </div>
        );
    }

}

function mapStateToProps(state){
    
    return {
        authenticateUser: state.authenticateUser,
        orders: state.getOrders || []
   }}
   
   function mapDispatchToProps(dispatch) {
    return { 
    
      dispatch
    }
  }
   

export default compose(withTranslation('common'), connect(mapStateToProps, mapDispatchToProps))(Profile);
