

// initial state
let initalState = 'Alo';


// create food reducer
const foodReducer = (state = initalState, { type, payload }) => {

    switch (type) {
        case "FOOD_CHANGE":
            return payload
            
    
        default:
            return state;
    }

}

// export default
export default foodReducer;