export const login = (msg) => {
    return { 
        type: "LOGIN", 
        payload: msg 
    }
}     

export const logout = (msg) => {
    return { 
        type: "LOGOUT", 
        payload: msg 
    }
}