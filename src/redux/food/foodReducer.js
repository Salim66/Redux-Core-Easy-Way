import { FOOD_CHANGE } from "./actionType";
import { initalState } from "./initialState";



// create food reducer
const foodReducer = (state = initalState, { type, payload }) => {

    switch (type) {
        case FOOD_CHANGE:
            return payload
            
    
        default:
            return state;
    }

}

// export default
export default foodReducer;