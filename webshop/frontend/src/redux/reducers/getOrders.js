import { GET_ALL_ORDERS } from "../constants/action-types";


export default function get_user(state = [], action){

    switch(action.type){
        case GET_ALL_ORDERS: 
            return action.payload

        default:
            return state;
    } 
}