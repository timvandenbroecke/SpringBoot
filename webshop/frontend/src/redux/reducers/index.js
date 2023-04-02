import { combineReducers } from 'redux';
import login from './login';
import register from './register';
import alert from './alert';
import authenticateUser from './authenticateUser';
import store from './store';
import pagination from './pagination';
import totalitems from './totalitems';
import get_user from './getUser';
import email_exists from './emailExists';
import basket from './basket';
import order from './order';


export default combineReducers({
    login,
    register,
    alert,
    authenticateUser,
    store, 
    pagination,
    totalitems,
    get_user,
    email_exists,
    basket,
    order
});
