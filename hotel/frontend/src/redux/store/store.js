import { Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import combineReducers from '../reducers';



export const store = configureStore({ middleware: [thunk], reducer: combineReducers});