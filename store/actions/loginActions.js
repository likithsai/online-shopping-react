import { LOGIN, LOGOUT } from "../types";

export const login = (item) => {
    return { 
        type: LOGIN, 
        payload: item 
    }
}     

export const logout = (item) => {
    return { 
        type: LOGOUT, 
        payload: item 
    }
}