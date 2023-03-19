import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import {
  ERROR_FIELD_EMPTY,
  ERROR_PASSWORD_NOT_EQUAL,
  ERROR_EMAIL_WRONG
} from "../constants/ValidationConstants"


export default function Register({onCloseRegister}) {
 const { t, i18n } = useTranslation("common");

 // Form variables
 const [firstname, setFirstName] = useState("");
 const [surname, setSurname] = useState("");
 const [adress, setAdress] = useState("");
 const [city, setCity] = useState("");
 const [postcode, setPostCode] = useState("");
 const [province, setProvince] = useState("");
 const [country, setCountry] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [repeatPassword, setRepeatPassword] = useState("");

 // Form validation variables
 const [passwordValidation, setPasswordValidation] = useState(false);
 const [firstNameValidation, setFirstNameValidation] = useState(false);
 const [surnameValidation, setSurnameValidation] = useState(false);
 const [adressValidation, setAdressValidation] = useState(false);
 const [cityValidation, setCityValidation] = useState(false);
 const [postcodeValidation, setPostcodeValidation] = useState(false);
 const [provinceValidation, setProvinceValidation] = useState(false);
 const [countryValidation, setCountryValidation] = useState(false);
 const [emailValidation, setEmailValidation] = useState(false);
 
 const [firstNameText, setFirstNameText] = useState("");
 const [surnameText, setSurnameText] = useState("");
 const [adressText, setAdressText] = useState("");
 const [cityText, setCityText] = useState("");
 const [postcodeText, setPostCodeText] = useState("");
 const [provinceText, setProvinceText] = useState("");
 const [countryText, setCountryText] = useState("");
 const [emailText, setEmailText] = useState("");
 const [passwordText, setPasswordText] = useState("");



 useEffect(() => {

  if(password === repeatPassword){
    setPasswordValidation(false);
    setPasswordText(ERROR_PASSWORD_NOT_EQUAL);
    return; 
  }
  setPasswordValidation(true);  
  setPasswordText(ERROR_PASSWORD_NOT_EQUAL);


}, [repeatPassword, password, firstname]);


const postRegister = (jsonForm) => {


}

//  Email validation
const emailVaLidation = (props) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(props))
  {
    setEmailValidation(false);
    setEmailText("");
    return;
  }
    setEmailValidation(true);
    setEmailText(ERROR_EMAIL_WRONG);
}


 const onsubmit = () => {
  

  // Validation
  if(password === repeatPassword){
    setPasswordValidation(true);
    setPasswordText("");
    
  }else{
    setPasswordValidation(false);  
    setPasswordText(ERROR_PASSWORD_NOT_EQUAL);
  }
 


  if(firstname.length < 1){ 
    setFirstNameValidation(true);
    setFirstNameText(ERROR_FIELD_EMPTY);
  }else {
    setFirstNameValidation(false);
    setFirstNameText("");
  } 

  if(surname.length < 1){
    setSurnameValidation(true);
    setSurnameText(ERROR_FIELD_EMPTY);
  }else {
    setSurnameValidation(false);
    setSurnameText("");
  }

  if(adress.length < 1){ 
    setAdressValidation(true);
    setAdressText(ERROR_FIELD_EMPTY);
  } else {
    setAdressValidation(false);
    setAdressText("");
  }
  if(city.length < 1) {
    setCityValidation(true);
    setCityText(ERROR_FIELD_EMPTY);
  }else {
    setCityValidation(false);
    setCityText("")
  }

  if(postcode.length < 1) {
    setPostcodeValidation(true);
    setPostCodeText(ERROR_FIELD_EMPTY);
  }else {
    setPostcodeValidation(false);
    setPostCodeText("");

  }
  if(province.length < 1) {
    setProvinceValidation(true);
    setProvinceText(ERROR_FIELD_EMPTY);
  }else{
    setProvinceValidation(false);
    setProvinceText("");
  }

  if(country.length < 1){
    setCountryValidation(true);
    setCountryText(ERROR_FIELD_EMPTY);
  }else {
    setCountryValidation(false);
    setCountryText("");
  }

  if(email.length < 1){
    setEmailValidation(true);
    setEmailText(ERROR_FIELD_EMPTY);
  }else {
    setEmailValidation(false);
    setEmailText("");
  }

  if(password.length < 1){
    setPasswordValidation(true);
    setPasswordText(ERROR_FIELD_EMPTY);
  }else {
    setPasswordValidation(false);
    setPasswordText("");
  }

  emailVaLidation(email);


  if(country.length < 1 && email.length < 1) setCountryValidation(true);
  if(email.length < 1) setEmailValidation(true);

  if(firstNameValidation === false && surnameValidation === false && adressValidation === false && cityValidation === false && postcodeValidation === false && provinceValidation === false && countryValidation === false && passwordValidation === false){


      // json form
      const submitForm = {
        firstname: firstname,
        surname: surname,
        adress: adress,
        city: city,
        postcode: postcode,
        province: province,
        country: country,
        email: email,
        password: password
      }

      

      postRegister(submitForm);
  }

 }


  return (
    <div className='register-container'>
      <Paper>
        <div className='register-close'>
          <IconButton onClick={() => onCloseRegister()}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className='register-header'>
          <h1>{t("REGISTER")}</h1>
        </div>
        <div className='form-container'>
          <div className='form-register'>
            <TextField
              error={firstNameValidation }
              fullWidth={true}
              id="outlined-error-helper-text"
              label={t('FIRST_NAME')}
              helperText={ firstNameValidation ? t(firstNameText) : ""}
              value={firstname || ""}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <TextField
              error={surnameValidation}
              fullWidth={true}
              id="outlined-error-helper-text"
              label={t('SUR_NAME')}
              helperText={ surnameValidation ? t(surnameText) : ""}
              value={surname || ""}
              onChange={(event) => setSurname(event.target.value)}
            />
          </div>
          <div className='form-register'>
            <TextField
              error={adressValidation}
              fullWidth={true}
              id="outlined-error-helper-text"
              label={t('ADRESS')}
              helperText={ adressValidation ? t(adressText) : ""}
              value={adress || ""}
              onChange={(event) => setAdress(event.target.value)}
            />
              <TextField
              error={cityValidation}
              fullWidth={true}
              id="outlined-error-helper-text"
              label={t('CITY')}
              helperText={ cityValidation ? t(cityText) : ""}
              value={city || ""}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className='form-register'>
            <TextField
              error={postcodeValidation}
              fullWidth={true}
              id="outlined-error-helper-text"
              label={t('POSTCODE')}
              helperText={ postcodeValidation ? t(postcodeText) : ""}
              value={postcode || ""}
              onChange={(event) => setPostCode(event.target.value)}
            />
            <TextField
              error={provinceValidation}
              fullWidth={true}
              id="outlined-error-helper-text"
              label={t('PROVINCE')}
              helperText={ provinceValidation ? t(provinceText) : ""}
              value={province || ""}
              onChange={(event) => setProvince(event.target.value)}
            />
          </div>
          <div className='form-register'>
            <TextField
              error={countryValidation}
              fullWidth={true}
              id="outlined-error-helper-text"
              label={t('COUNTRY')}
              helperText={ countryValidation ? t(countryText) : ""}
              value={country || ""}
              onChange={(event) => setCountry(event.target.value)}
            />
          </div>
          <div>
            <Divider/>
          </div>
          <div className='form-register' style={{paddingTop: "2rem"}} >
            <TextField
              error={emailValidation}
              fullWidth={true}
              id="outlined-error-helper-text"
              label={t('EMAIL')}
              helperText={ emailValidation ? t(emailText) : ""}
              value={email || ""}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className='form-register'>
            <TextField
              error={passwordValidation}
              fullWidth={true}
              id="outlined-error-helper-text"
              label={t('PASSWORD')}
              helperText={ passwordValidation ? t(passwordText) : ""}
              value={password || ""}
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              error={passwordValidation}
              fullWidth={true}
              id="outlined-error-helper-text"
              label={t('REPEAT_PASSWORD')}
              helperText={ passwordValidation ? t(passwordText) : ""}
              value={repeatPassword || ""}
              onChange={(event) => setRepeatPassword(event.target.value)}
            />
          </div>
          <div><button onClick={() => onsubmit()}>Submit</button></div>
        </div>
      </Paper>
    </div>
  );
}
