import { contactReducer } from "./contact.reducer";
import { combineReducers } from "redux";

export default combineReducers({
  contact: contactReducer,
});
