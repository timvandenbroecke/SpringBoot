
import { EMAIL_EXISTS } from "../constants/action-types";

export default function email_exists(state = [], action){

    switch(action.type){
        case EMAIL_EXISTS: 
            return action.payload

        default:
            return state;
    } 
}