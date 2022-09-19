import { combineReducers } from "redux";
import colorsReducer from "./color/colorsReducer";
import counterReducer from "./counter/counterReducer";
import foodReducer from "./food/foodReducer";


// create conbine reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    colors: colorsReducer,
    foods: foodReducer
});

// export root reducer
export default rootReducer;