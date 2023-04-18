import React, {Component} from "react";
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {updateUser} from "../redux/actions";
import CustomButton from "./buttons/CustomButton";


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
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            adress: this.state.adress,
            city: this.state.province,
            postcode: this.state.postcode,
            province: this.state.province,
            country: this.state.country
        }

        this.props.dispatch(updateUser(data));
        this.props.onCloseEditProfile();
    }

    componentDidMount(){
        this.setState({
                        firstname:  this.props.authenticateUser.firstname,
                        lastname: this.props.authenticateUser.lastname,
                        adress: this.props.authenticateUser.adress,
                        city: this.props.authenticateUser.city,
                        postcode: this.props.authenticateUser.postcode,
                        province: this.props.authenticateUser.province,
                        country: this.props.authenticateUser.country
                     });
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
                            value={firstname}
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
                            value={lastname}
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
                            value={adress}
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
                            value={city}
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
                            value={postcode}
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
                            value={province}
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
                            value={country}
                            onChange={(e) => this.onChange(e)}
                            fullWidth
                        />
                    </div>
                    <div>
                        <CustomButton onClick={() => this.onClickSubmit()}>{t("SUBMIT")}</CustomButton>
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
