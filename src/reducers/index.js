//  index.js
import cartItems from './reducers';
import loginSession from './loginReducers';
import { combineReducers } from "redux";

const allReducers = combineReducers({ 
    cartItems,
    loginSession
});

export default allReducers;