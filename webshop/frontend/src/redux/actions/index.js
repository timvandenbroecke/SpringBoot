import { LOGIN_USER,
         GET_USER,
         REGISTER_USER, 
         ALERT, 
         AUTHENTICATE_USER_JWT, 
         GET_ITEMS, 
         ADD_BASKET,
         CHANGE_PAGINATION,
         GET_TOTAL_ITEMS,
         EMAIL_EXISTS  } from "../constants/action-types";

import Axios from "../../axios/Axios";





// Login
export const loginUser = (data) => async dispatch => {

  const axios = new Axios(dispatch);

  const promise = await axios.post("/api/security/authenticate", data);
  

  await dispatch({type: LOGIN_USER, payload: promise});

  if(!promise.message){
    
    const disableAlert = {
      openAlert: true,
      messageAlert: "LOGIN_SUCCESS",
      severityAlert: "success"
    };
    dispatch({type: ALERT, payload: disableAlert});

  }
 

  if(promise.token.length > 0) localStorage.setItem('token', promise.token)
};

// Register
export const registerUser = (data) => async dispatch => {

  const payload = {
    username: data.email,
    password: data.password,
    firstname: data.firstname,
    lastname: data.lastname,
    postcode: data.postcode,
    address: data.address,
    city: data.city,
    province: data.province,
    country: data.country
  }

  const axios = new Axios(dispatch);
  const promise = await axios.post("/api/security/register", payload);


  if(!promise.message){
    const disableAlert = {
      openAlert: true,
      messageAlert: "REGISTER_SUCCESS",
      severityAlert: "success"
    };
    return dispatch({type: ALERT, payload: disableAlert});

  }
  dispatch({type: REGISTER_USER, payload: promise});

}

// Authenticate by jwt
export const authenticateUser = (token) => async dispatch => {
  const axios = new Axios(dispatch);

  const promise = await axios.get("/api/security/getuser/" + token);

  return dispatch({type: AUTHENTICATE_USER_JWT, payload: promise});

}

//  Alert
export const alert = (data) => dispatch => {
  const axios = new Axios(dispatch);

   dispatch({type: ALERT, payload: data});

   setTimeout(function() {
    const disableAlert = {
      openAlert: false,
      messageAlert: data.messageAlert,
      severityAlert: data.severityAlert,

    } 

    dispatch({type: ALERT, payload: disableAlert});
  }, 6000);

}


// Get items by pagination
export const getItemsByPagination = (page, total, sort, type) => async dispatch => {
  const axios = new Axios(dispatch);


  const data = {
    page: page,
    total: total,
    sort: sort,
    type: type
  };

  const promise = await axios.post("/api/store/get_items", data);


  dispatch({type: GET_ITEMS, payload: promise});

}

export const getTotalItems = (type) => async dispatch => {
  const axios = new Axios(dispatch);


  const promise = await axios.get("/api/store/get_items_total/" + type);

  dispatch({type: GET_TOTAL_ITEMS, payload: promise});
}

//  Change pagination parameters
export const changePaginationParams = (page, rowsPerPage, total, type) => dispatch => {
  const pagination = {
    page: page,
    rowsPerPage: rowsPerPage,
    total: total,
    type: type
  }

  dispatch({type: CHANGE_PAGINATION, payload: pagination});

}


//  Get user info 
export const getUserCurrentUser = () => async dispatch => {
  const axios = new Axios(dispatch);


}


// If user email exists return true
export const userEmailExists = (email) => async dispatch =>{
  const axios = new Axios(dispatch);

  const promise = await axios.get("/api/user/emailexists/" + email);
  dispatch({type: EMAIL_EXISTS, payload: promise });

}