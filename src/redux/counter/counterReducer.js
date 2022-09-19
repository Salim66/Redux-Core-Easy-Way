import { createStore } from "redux";
import { DECREMENT, INCREMENT } from "./actionType";
import { initialState } from "./initialState";





// create counter reducer
const counterReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case INCREMENT:
            return state + 1;
            break;
        case DECREMENT:
            return state - 1;
            break;

        default:
            return state;
    }

}

// export default
export default counterReducer;