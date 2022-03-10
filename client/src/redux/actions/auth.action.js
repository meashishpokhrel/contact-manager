import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import {
  CREATE_USER,
  LOAD_USER,
  SIGNIN_USER,
  SIGNOUT_USER,
} from "../constant/types";

export const addUser = (user, callback) => {
  return (dispatch) => {
    axios
      .post(`/api/auth/register`, user)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: CREATE_USER,
          token: token.data,
        });
        callback();
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
      .post(`/api/auth/login`, { email, password })
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

export const signOutTimer = () => {
  const getToken = localStorage.getItem("token");
  const user = jwtDecode(getToken);
  const expiry = (user.exp - user.iat) * 1000;
  return (dispatch) => {
    setTimeout(() => {
      dispatch(signOut());
    }, expiry);
  };
};
