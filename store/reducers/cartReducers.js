import { ADDTOCART, REMOVEFROMCART, REMOVEALLITEMSFROMCART, ADDCURRENCY } from "../types";

const INITIAL_STATE = {
    items: []
};

const cartReducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADDTOCART:
            if(!state.items.includes(action.payload)) {
                return { ...state, items: [...state.items, action.payload] };
            } else {
                return { ...state, items: state.items };
            }
            
        case REMOVEFROMCART:
            return { ...state, items: state.items.filter((el) => el.itemid != action.payload.itemid ) };

        case REMOVEALLITEMSFROMCART:
            return { ...state, items: [] };

        case ADDCURRENCY:
            return { ...state, currency: [action.payload] };

        default:
            return state;
    }
}

export default cartReducers;