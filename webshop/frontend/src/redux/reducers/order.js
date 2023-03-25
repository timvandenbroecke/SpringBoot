import { ORDER } from "../constants/action-types";


export default function order(state = {}, action) {
    switch (action.type) {
      case ORDER:  
        return action.payload
      default:
        return state
    }
  }