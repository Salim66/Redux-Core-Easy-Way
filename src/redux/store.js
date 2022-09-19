import { createStore } from "redux";
import rootReducer from "./rootReducer";


// create redux store
const store = createStore(rootReducer);

// export default 
export default store;