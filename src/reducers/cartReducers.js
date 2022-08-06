//  cartReducers.js

const INITIAL_STATE = {
    items: []
};

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADDTOCART":
            if(!state.items.includes(action.payload)) {
                return { ...state, items: [...state.items, action.payload] };
            } else {
                return { ...state, items: state.items };
            }
            
        case "REMOVEFROMCART":
            return { ...state, items: state.items.filter((el) => el.itemid != action.payload.itemid ) };

        case "REMOVEALLITEMSFROMCART":
            return { ...state, items: [] };

        default:
            return state;
    }
}

export default reducers;