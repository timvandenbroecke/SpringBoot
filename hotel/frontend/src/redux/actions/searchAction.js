import { SEARCH_HOTEL } from "../constants/reducersConstants";


export const searchHotel = (data) => dispatch => {

     dispatch({type: SEARCH_HOTEL, payload: data}); 
 }


 export const searchResult = () => async dispatch => {

    
 }