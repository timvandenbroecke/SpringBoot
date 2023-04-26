import {SEARCH_HOTEL} from "../constants/reducersConstants";



const search = (state = [], action) => {

    switch (action.type) {
        case SEARCH_HOTEL:
             
            return action.payload
      
        default: return state  
    }      
}          
            
export default search