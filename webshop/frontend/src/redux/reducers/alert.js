import { ALERT } from "../constants/action-types";


export default function alert(state = [], action) {
    switch (action.type) {
      case ALERT:
        
        return action.payload
      default:
        return state
    }
  }