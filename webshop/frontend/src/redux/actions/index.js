import { LOGIN_USER,
         GET_USER,
         REGISTER_USER, 
         ALERT, 
         AUTHENTICATE_USER_JWT, 
         GET_ITEMS, 
         ADD_BASKET,
         DELETE_BASKET,
         CHANGE_PAGINATION,
         GET_TOTAL_ITEMS,
         EMAIL_EXISTS,
         ORDER,
         GET_ALL_ORDERS,
         UPDATED_USER
           } from "../constants/action-types";

import Axios from "../../axios/Axios";



//  Update user
export const updateUser = (data) => async dispatch => {

  const axios = new Axios(dispatch);

  const promise = await axios.post("/api/user/update_user", data);
  dispatch({type: AUTHENTICATE_USER_JWT, payload: promise});

  const updateAlert = {
    openAlert: true,
    messageAlert: "UPDATED_USER_SUCCESS",
    severityAlert: "success"
  };

  dispatch({type: ALERT, payload: updateAlert});

}



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
 

  if(promise.token.length > 0){
    localStorage.setItem('token', promise.token);

    const authPromise = await axios.get("/api/security/getuser/" + promise.token);

    dispatch({type: AUTHENTICATE_USER_JWT, payload: authPromise});
  }
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

// Order items
export const order = (order, user_id) => async dispatch => {
  const axios = new Axios(dispatch);

  let formattedOrder = [];

 

  order.forEach(orderEll => {
    let element = {
      item_id: orderEll.id,
      item_quantity: 1
    }

    formattedOrder.forEach(ell => {
      if( ell.item_id === orderEll.id){
        ell.item_quantity += 1;
      }
    });

    let isEqual = false;
    formattedOrder.forEach(ell => {
      if( ell.item_id === orderEll.id) isEqual = true;
      
    });

    if(!isEqual){
      formattedOrder.push(element)
    }
    
  });

  const promise = await axios.post("/api/store/order", formattedOrder);

  dispatch({type: ORDER, payload: promise});
  dispatch({type: ADD_BASKET, payload: []});
  
}


export const clear_order = () => dispatch => {

  dispatch({type: ORDER, payload: []});

}

//********** Basket ************/

export const addBasket = (basket) => dispatch => {
  
  dispatch({type: ADD_BASKET, payload: basket});

}

export const deleteBasket = (basket) => dispatch => {
  
  dispatch({type: DELETE_BASKET, payload: basket});

}

export const clearBasket = () => dispatch => {
  dispatch({type: ADD_BASKET, payload: []});

}

/********************************/


export const getAllOrders = () => async dispatch =>{
  const axios = new Axios(dispatch);

  const promise = await axios.get("/api/store/get_orders");
  dispatch({type: GET_ALL_ORDERS, payload: promise });

}



