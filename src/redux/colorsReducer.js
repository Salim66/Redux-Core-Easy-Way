

// initail state 
let initialState = 'gray';


// create colors reducer
const colorsReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'RED':
            return 'red';
        case 'GREEN':
            return 'green';
        case 'YELLOW':
            return 'yellow';
        case 'BLUE':
            return 'blue';
        case 'GRAY':
            return 'gray';
    
        default:
            return state;
    }

}


// export default
export default colorsReducer;