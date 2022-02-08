import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allCombinedReducer from "./reducer/reducer";
import thunk from "redux-thunk";

const store = createStore(allCombinedReducer, applyMiddleware(thunk));

export default store;
