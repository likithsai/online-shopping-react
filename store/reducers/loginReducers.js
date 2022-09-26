//  loginReducers.js
import { LOGIN, LOGOUT } from "../types";

const initialState = { isLoggedIn: false, user: null };

const loginReducers = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };

        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };

        default:
            return state;
    }
};

export default loginReducers;