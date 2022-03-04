import { contactReducer } from "./contact.reducer";
import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";

export default combineReducers({
  contact: contactReducer,
  auth: authReducer,
});
