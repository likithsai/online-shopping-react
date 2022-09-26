import { combineReducers } from "redux";
import cartItems from './cartReducers';
import loginSession from './loginReducers';

const allReducer = combineReducers({
  cartItems,
  loginSession
});

export default allReducer;