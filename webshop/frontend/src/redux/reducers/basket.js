import { ADD_BASKET, DELETE_BASKET } from "../constants/action-types";


export default function basket(item = [] , action) {
    switch (action.type) {
      case ADD_BASKET:
        
      return item.concat(action.payload);
      case DELETE_BASKET: 
        return action.payload
      default:
        return item
    }
  }