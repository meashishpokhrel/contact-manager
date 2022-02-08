import {
  CREATE_USER,
  LOAD_USER,
  SIGNIN_USER,
  SIGNOUT_USER,
} from "../constant/types";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  _id: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_USER:
    case CREATE_USER:
    case LOAD_USER:
      toast("Welcome...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      const user = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        email: user.email,
        _id: user._id,
      };
    case SIGNOUT_USER:
      localStorage.removeItem("token");
      toast("Please Visit Again !!! GoodBye !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        token: null,
        name: null,
        email: null,
        _id: null,
      };

    default:
      return state;
  }
};
