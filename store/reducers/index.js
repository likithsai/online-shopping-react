import { combineReducers } from "redux";
import cartItems from './cartReducers';

const allReducer = combineReducers({
  cartItems
});

export default allReducer;