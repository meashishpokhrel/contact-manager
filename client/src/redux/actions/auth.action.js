import axios from "axios";
import { toast } from "react-toastify";
import {
  CREATE_USER,
  LOAD_USER,
  SIGNIN_USER,
  SIGNOUT_USER,
} from "../constant/types";

const url = process.env.REACT_APP_URL;

export const addUser = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/register`, user)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: CREATE_USER,
          token: token.data,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data?.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signIn = (email, password, callback) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/login`, { email, password })
      .then((token) => {
        localStorage.setItem("token", token.data);

        dispatch({
          type: SIGNIN_USER,
          token: token.data,
        });
        callback();
      })
      .catch((error) => {
        toast.error(error.response?.data.message, {
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
  };
};
