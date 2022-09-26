import { ADDTOCART, REMOVEFROMCART, REMOVEALLITEMSFROMCART, ADDCURRENCY } from "../types";

export const addItemToCart = (item) => {
    return {
        type: ADDTOCART,
        payload: item
    }
}

export const removeItemToCart = (item) => {
    return {
        type: REMOVEFROMCART,
        payload: item
    }
}

export const removeAllCartItems = () => {
    return {
        type: REMOVEALLITEMSFROMCART
    }
}
