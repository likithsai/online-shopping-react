import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";

// initial states here
const initalState = {};

// creating store
export const store = createStore(
  rootReducer,
  initalState
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);