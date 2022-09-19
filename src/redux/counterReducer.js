import { createStore } from "redux";


// initial state
let initialState = 0;


// create counter reducer
const counterReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'INCREMENT':
            return state + 1;
            break;
        case 'DECREMENT':
            return state - 1;
            break;

        default:
            return state;
    }

}

// export default
export default counterReducer;