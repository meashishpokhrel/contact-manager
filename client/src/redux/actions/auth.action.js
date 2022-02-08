import axios from "axios";
import { url } from "../../api/index";
import { toast } from "react-toastify";
import {
  CREATE_USER,
  LOAD_USER,
  SIGNIN_USER,
  SIGNOUT_USER,
} from "../constant/types";

export const addUser = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/user`, user)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: CREATE_USER,
          token: token.data,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: LOAD_USER,
        token,
      });
    } else return null;
  };
};

export const signIn = (email, password) => {
  return (dispatch) => {
    axios
      .post(`${url}/signin`, { email, password })
      .then((token) => {
        localStorage.setItem("token", token.data);

        dispatch({
          type: SIGNIN_USER,
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: SIGNOUT_USER,
    });

    dispatch({
      type: "SIGN_OUT",
    });
  };
};
