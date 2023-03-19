import { GET_TOTAL_ITEMS } from "../constants/action-types";

export default function totalitems(state = [], action) {
    switch (action.type) {
      case GET_TOTAL_ITEMS:
        
        return action.payload


      default:
        return state
    }
  }