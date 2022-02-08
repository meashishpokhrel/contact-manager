import { CREATE_USER } from "../constant/types";
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
    case CREATE_USER:
      toast("Welcome..", {
        position: toast.POSITION.TOP_CENTER,
      });
      const user = jwtDecode(action.token);
      return {
        ...state,
        token: action.token,
        name: user.name,
        email: user.email,
        _id: user._id,
      };

    default:
      return state;
  }
};
