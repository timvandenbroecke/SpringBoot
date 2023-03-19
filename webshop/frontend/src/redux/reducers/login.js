import { LOGIN_USER } from "../constants/action-types";


export default function login(state = {}, action) {
    switch (action.type) {
      case LOGIN_USER:  
        return action.payload
      default:
        return state
    }
  }