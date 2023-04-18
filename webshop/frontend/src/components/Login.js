import React, { useState, useRef } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {loginUser} from '../redux/actions';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import CustomButton from './buttons/CustomButton';



export default function Login({onCloseLogin}) {


  const dispatch = useDispatch()
  const formRef = useRef(null);


  //  Translations
  const { t, i18n } = useTranslation("common");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {


    const data = {
      username: username,
      password: password,
    }

    dispatch(loginUser(data));
  }

  const handleOnChangeUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleOnPassword = (event) => {
    setPassword(event.target.value);
  }

  
  const submit = () => {

    const data = {
      username: username,
      password: password,
    }

    dispatch(loginUser(data)).then(() => {
      onCloseLogin();
    });
  };

  return (
    <div className='login-container'>
      <Paper>
      <div className='login-close'>
        <IconButton onClick={() => onCloseLogin()}>
          <CloseIcon />
        </IconButton>
      </div>
        <div className='login-header'>
          <h1>{t("LOGIN")}</h1>
        </div>
        <div className='form-container'>
          <div className='form-login'>

            <ValidatorForm
                ref={formRef}
                onSubmit={() => submit()}
                debounceTime={500}
            >

              <TextValidator className='register-field'
                  fullWidth={true}
                  label={t("USERNAME")}
                  onChange={(e) => handleOnChangeUsername(e)}
                  name="username"
                  value={username || ""}
                  validators={['required']}
                  errorMessages={[t("FIELD_REQUIRED")]}
              />

              <TextValidator className='register-field'
                  fullWidth={true}
                  label={t("PASSWORD")}
                  onChange={(e) => handleOnPassword(e)}
                  name="password"
                  value={password || ""}
                  validators={['required']}
                  errorMessages={[t("FIELD_REQUIRED")]}
              />
        
              <CustomButton>Login</CustomButton>
            </ValidatorForm>
          </div>
        </div>
      </Paper>
    </div>
  );
}