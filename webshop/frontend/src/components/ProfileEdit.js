import React, {Component} from "react";
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {updateUser} from "../redux/actions";

class EditProfile extends Component {
    constructor(){
        super();

        this.state = {
            firstname: "",
            lastname: "",
            adress: "",
            postcode: "",
            city: "",
            province: "",
            country: ""
        }
    }

    onChange = (event) => {

        const value = event.target.value;
        this.setState({[event.target.name]: value})
    }

    onClickSubmit = () => {
        const data = {
            username: this.props.authenticateUser.username,
            firstname: this.state.firstname || this.props.authenticateUser.firstname,
            lastname: this.state.lastname || this.props.authenticateUser.lastname,
            adress: this.state.adress || this.props.authenticateUser.adress,
            city: this.state.province || this.props.authenticateUser.province,
            postcode: this.state.postcode || this.props.authenticateUser.postcode,
            province: this.state.province || this.props.authenticateUser.province,
            country: this.state.country || this.props.authenticateUser.country
        }

        this.props.dispatch(updateUser(data));
        this.props.onCloseEditProfile();
    }


    render(){

        const {authenticateUser, t} = this.props;
        const {firstname, lastname, adress, city, postcode, province, country} = this.state;

        return (
            <div className="edit-profile">
                <Paper className="container">

                    <div>
                        <TextField 
                            className="textfield"
                            id="outlined-basic" 
                            label={t("USERNAME")} 
                            variant="outlined" 
                            value={authenticateUser.username}
                            disabled
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField 
                            className="textfield"
                            id="outlined-basic" 
                            label={t("FIRST_NAME")} 
                            variant="outlined" 
                            name="firstname"
                            value={firstname || this.props.authenticateUser.firstname}
                            onChange={(e) => this.onChange(e)}
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField 
                            className="textfield"
                            id="outlined-basic" 
                            label={t("SUR_NAME")} 
                            variant="outlined" 
                            name="lastname"
                            value={lastname || this.props.authenticateUser.lastname}
                            onChange={(e) => this.onChange(e)}
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField 
                            className="textfield"
                            id="outlined-basic" 
                            label={t("ADDRESS")} 
                            variant="outlined" 
                            name="adress"
                            value={adress || this.props.authenticateUser.adress}
                            onChange={(e) => this.onChange(e)}
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField 
                            className="textfield"
                            id="outlined-basic" 
                            label={t("CITY")} 
                            variant="outlined" 
                            name="city"
                            value={city || this.props.authenticateUser.city}
                            onChange={(e) => this.onChange(e)}
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField 
                            className="textfield"
                            id="outlined-basic" 
                            label={t("POSTCODE")} 
                            variant="outlined" 
                            name="postcode"
                            value={postcode || this.props.authenticateUser.postcode}
                            onChange={(e) => this.onChange(e)}
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField 
                            className="textfield"
                            id="outlined-basic" 
                            label={t("PROVINCE")} 
                            variant="outlined" 
                            name="province"
                            value={province || this.props.authenticateUser.province}
                            onChange={(e) => this.onChange(e)}
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField 
                            className="textfield"
                            id="outlined-basic" 
                            label={t("COUNTRY")} 
                            variant="outlined" 
                            name="country"
                            value={country || this.props.authenticateUser.country}
                            onChange={(e) => this.onChange(e)}
                            fullWidth
                        />
                    </div>
                    <div>
                        <Button onClick={() => this.onClickSubmit()} variant="outlined" >{t("SUBMIT")}</Button>
                    </div>

                </Paper>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state.authenticateUser)
    return {
        authenticateUser: state.authenticateUser,
   }}
   
   function mapDispatchToProps(dispatch) {
    return { 
    
      dispatch
    }
  }
   

export default compose(withTranslation('common'), connect(mapStateToProps, mapDispatchToProps))(EditProfile);
