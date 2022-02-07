import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allCombinedReducer from "./reducer/reducer";

const store = createStore(allCombinedReducer, composeWithDevTools());

export default store;
