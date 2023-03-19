import { GET_USER } from "../constants/action-types";


export default function get_user(state = [], action){

    switch(action.type){
        case GET_USER: 
            return action.payload

        default:
            return state;
    } 
}