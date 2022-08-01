//  index.js
import cartItems from './reducers';
import { combineReducers } from "redux";

const allReducers = combineReducers({ 
    cartItems
});

export default allReducers;