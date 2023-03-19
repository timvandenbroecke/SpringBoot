import { GET_ITEMS, ADD_BASKET, CHANGE_PAGINATION } from "../constants/action-types";

export default function store(state = [], action) {
    switch (action.type) {
      case GET_ITEMS:
        
        return action.payload


      default:
        return state
    }
  }