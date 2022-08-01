//  cartReducers.js

const INITIAL_STATE = {
    items: []
};

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADDTOCART":
            return { ...state, items: [...state.items, action.payload] };
        
        case "REMOVEFROMCART":
            return { ...state, items: state.items.filter((el) => el.itemid != action.payload.itemid ) };

        case "REMOVEALLITEMSFROMCART":
            return { ...state, items: [] };

        default:
            return state;
    }
}

export default reducers;