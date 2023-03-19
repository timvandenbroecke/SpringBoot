import React, {Component} from 'react'; 
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { withTranslation } from 'react-i18next';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@mui/material/TextField';
import {userEmailExists, registerUser} from "../../redux/actions";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose } from 'redux';

  const steps = ['Account', 'Adress', 'Info'];



class RegisterStepper extends Component {

  constructor(){
    super();
    this.state = {
      prevActiveStep: 0,
      activeStep: 0, // current stepper step
      steps: [],
      formData: {
        email: "",
        password: "",
        repeatPassword: "",
        firstname: "",
        lastname: "",
        address: "",
        city: "",
        postcode: "",
        province: "",
        country: "",
      },
      submitted: false,
      account: false,
      adress: false,
      info: false,
      emailExists: false
    }
  }

  componentDidMount() {
    // custom rule 
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if (value !== this.state.formData.password) {
            return false;
        }
        return true;
    });


    ValidatorForm.addValidationRule('isEmailExists', () => {
      if (this.props.email_exists === true) {
          return false;
      }
      return true;
  });
  }

  componentWillUnmount() {
    // remove rule on Unmount
    ValidatorForm.removeValidationRule('isPasswordMatch');
    ValidatorForm.removeValidationRule('isEmailExists');

  }

  handleChangeForm = (event) => {

    
    if(event.target.name == "email" && event.target.value.length > 1){
      setTimeout(() => {
        this.setState({email: this.props.dispatch(userEmailExists(event.target.value))});
      }, 3000);
    }

    const {formData} = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({formData});
  }

  handleSubmit = () => {
    this.props.dispatch(registerUser(this.state.formData));

    this.props.onCloseRegister();    
  }

  handleNext = () => {

    this.setState({activeStep: this.state.activeStep + 1});
    console.log(this.state.activeStep);
  };

  handleBack = () => {
    this.setState({activeStep: this.state.activeStep - 1});
  };

  
  handleReset = () => {
    this.setState({activeStep: 0});
  };



  accountStep = () =>{
    const {formData, submitted, activeStep} = this.state;
    return (
        <div className='form-register'>
            <ValidatorForm
                ref="form"
                onSubmit={this.handleNext}
                debounceTime={1500}
            >
              <h2>Account</h2>
              <TextValidator className='register-field'
                  fullWidth={true}
                  label={this.props.t("EMAIL")}
                  onChange={this.handleChangeForm}
                  name="email"
                  value={formData.email || ""}
                  validators={['required', 'isEmail', 'isEmailExists']}
                  errorMessages={[this.props.t("FIELD_REQUIRED"), this.props.t("EMAIL_NOT_VALID"), "Email already exists"]}
              />
              <TextValidator className='register-field'
                    fullWidth={true}
                    label={this.props.t("PASSWORD")}
                    onChange={this.handleChangeForm}
                    name="password"
                    type="password"
                    validators={['required']}
                    errorMessages={[this.props.t("FIELD_REQUIRED")]}
                    value={formData.password || ""}
                />
                <TextValidator className='register-field'
                    fullWidth={true}
                    label={this.props.t("PASSWORD_REPEAT")}
                    onChange={this.handleChangeForm}
                    name="repeatPassword"
                    type="password"
                    validators={['isPasswordMatch', 'required']}
                    errorMessages={[this.props.t("PASSWORD_MISMATCH"), this.props.t("FIELD_REQUIRED")]}
                    value={formData.repeatPassword || ""}
                />
                 <div className='form-button'>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, width: '40em'}}>
                      <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={() => this.handleBack()}
                      sx={{ mr: 1 }}
                      >
                      Back
                      </Button>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button type='submit'>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                  </Box>
                </div>

            </ValidatorForm>
      </div>
    );
  }



  adressStep = () => {
    const {formData, submitted, activeStep} = this.state;

    return (
        <div className='form-register'>
          <ValidatorForm
                ref="form"
                onSubmit={this.handleNext}
                debounceTime={1500}
            >
              <h2>Adress</h2>
              <TextValidator className='register-field'
                  fullWidth={true}
                  label={this.props.t("FIRST_NAME")}
                  onChange={this.handleChangeForm}
                  name="firstname"
                  type="name"
                  value={formData.firstname || ""}
                  validators={['required']}
                  errorMessages={[this.props.t("FIELD_REQUIRED")]}
              />
              <TextValidator className='register-field'
                  fullWidth={true}
                  label={this.props.t("LAST_NAME")}
                  onChange={this.handleChangeForm}
                  name="lastname"
                  type="name"
                  value={formData.lastname || ""}
                  validators={['required']}
                  errorMessages={[this.props.t("FIELD_REQUIRED")]}
              />
              <TextValidator className='register-field'
                  fullWidth={true}
                  label={this.props.t("ADDRESS")}
                  onChange={this.handleChangeForm}
                  name="address"
                  type="address"
                  value={formData.address || ""}
                  validators={['required']}
                  errorMessages={[this.props.t("FIELD_REQUIRED")]}
              />
              <TextValidator className='register-field'
                    fullWidth={true}
                    label={this.props.t("CITY")}
                    onChange={this.handleChangeForm}
                    name="city"
                    type="city"
                    validators={['required']}
                    errorMessages={[this.props.t("FIELD_REQUIRED")]}
                    value={formData.city || ""}
                />
                <TextValidator className='register-field'
                    fullWidth={true}
                    label={this.props.t("POSTCODE")}
                    onChange={this.handleChangeForm}
                    name="postcode"
                    type="postcode"
                    validators={['required']}
                    errorMessages={[this.props.t("FIELD_REQUIRED")]}
                    value={formData.postcode || ""}
                />
                <TextValidator className='register-field'
                    fullWidth={true}
                    label={this.props.t("PROVINCE")}
                    onChange={this.handleChangeForm}
                    name="province"
                    type="province"
                    validators={['required']}
                    errorMessages={[this.props.t("FIELD_REQUIRED")]}
                    value={formData.province || ""}
                />
                <TextValidator className='register-field'
                    fullWidth={true}
                    label={this.props.t("COUNTRY")}
                    onChange={this.handleChangeForm}
                    name="country"
                    type="country"
                    validators={['required']}
                    errorMessages={[this.props.t("FIELD_REQUIRED")]}
                    value={formData.country || ""}
                />
                <div className='form-button'>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2,  width: '40em'}}>
                      <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={() => this.handleBack()}
                      sx={{ mr: 1 }}
                      >
                      Back
                      </Button>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button type='submit'>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                  </Box>
                </div>
            </ValidatorForm>
        </div>
    );
  }

  submit = () => {

    const {formData, submitted, activeStep} = this.state;
    const {t} = this.props;

    console.log("formdata: ", formData);

    return (
      <div>
      <div className='form-register-submit'>
        <div className='left-submit'>
          <h3>{t("FIRST_NAME")}:</h3>
          <h3>{t("SUR_NAME")}:</h3>
          <h3>{t("ADDRESS")}:</h3>
          <h3>{t("CITY")}:</h3>
          <h3>{t("POSTCODE")}:</h3>
          <h3>{t("PROVINCE")}:</h3>
          <h3>{t("COUNTRY")}:</h3>


        </div>
        <div className='right-submit'>
          <h3>{formData.firstname}</h3>
          <h3>{formData.lastname}</h3>
          <h3>{formData.address}</h3>
          <h3>{formData.city}</h3>
          <h3>{formData.postcode}</h3>
          <h3>{formData.province}</h3>
          <h3>{formData.country}</h3>
        </div>
      </div>
      <div>

      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, width: '40em', marginTop: "5em"}}>
              <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={() => this.handleBack()}
              sx={{ mr: 1 }}
              >
              Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={() => this.handleSubmit()}>
              {t("SUBMIT")}
              </Button>
          </Box>
      </div>
      </div>
    );
  }


 

  render(){

    const {activeStep, prevActiveStep} = this.state;
    const step = [this.accountStep, this.adressStep, this.submit];
    return (
      <Paper className='stepper'>
          <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
      
              return (
                  <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
              );
              })}
          </Stepper>
          {/*-----------   Render steps  ----------*/}
          <div className='stepper_container'>
            {step.map((obj, index) => {
              if(activeStep === index){
                return obj();
              }
            })}
          </div>
          {activeStep === steps.length ? (
              <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
             

              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={() => this.handleReset()}>Reset</Button>
              </Box>
              </React.Fragment>
          ) : (
              <React.Fragment>
             
              
              
              </React.Fragment>
          )}
          </Box>
      </Paper>
    );
  }
 
}

function mapStateToProps(state){


  return {
    email_exists: state.email_exists || false
  
 }}
 
function mapDispatchToProps(dispatch) {
return { 
  dispatch,
  ...bindActionCreators({ 
                          userEmailExists,
                          registerUser
                        },
                          dispatch
                      ),

}}

export default compose(withTranslation('common'), connect(mapStateToProps))(RegisterStepper);
