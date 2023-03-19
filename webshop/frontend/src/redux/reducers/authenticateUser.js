import { AUTHENTICATE_USER_JWT } from "../constants/action-types";


export default function authenticateUser(state = {}, action) {
    switch (action.type) {
      case AUTHENTICATE_USER_JWT:  
        return action.payload
      default:
        return state
    }
  }