import { combineReducers } from "redux";
import colorsReducer from "./color/colorsReducer";
import counterReducer from "./counterReducer";
import foodReducer from "./foodReducer";


// create conbine reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    colors: colorsReducer,
    foods: foodReducer
});

// export root reducer
export default rootReducer;