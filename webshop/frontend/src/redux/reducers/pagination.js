import { CHANGE_PAGINATION } from "../constants/action-types";

export default function pagination(state = [], action) {
    switch (action.type) {


      case CHANGE_PAGINATION:
        return action.payload

      default:
        return state
    }
  }