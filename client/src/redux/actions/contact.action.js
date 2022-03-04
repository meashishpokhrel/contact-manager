// Creaing some actions
import axios from "axios";
import { toast } from "react-toastify";

import {
  CREATE_CONTACT,
  GET_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  GET_ONE_CONTACT,
} from "../constant/types";

const url = process.env.REACT_APP_URL;

export const addContact = (contact) => {
  return (dispatch) => {
    axios
      .post(`${url}/contacts`, contact, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      })
      .then(({ data }) => {
        dispatch({
          type: CREATE_CONTACT,
          payload: data,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data?.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const getContact = () => {
  return (dispatch) => {
    axios
      .get(`${url}/contacts`, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      })
      .then(({ data }) => {
        dispatch({
          type: GET_CONTACT,
          payload: data,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data?.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const getOneContact = (id) => {
  return (dispatch) => {
    axios
      .get(`${url}/contacts/${id}`, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      })
      .then(({ data }) => {
        dispatch({
          type: GET_ONE_CONTACT,
          payload: data,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data?.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const editContact = (updatedContact, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/contacts/${id}`, updatedContact, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      })
      .then(({ data }) => {
        dispatch({
          type: EDIT_CONTACT,
          payload: data,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data?.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const deleteContact = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/contacts/${id}`, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      })
      .then(({ data }) => {
        dispatch({
          type: DELETE_CONTACT,
          payload: id,
        });
        toast.error("Deleted Successfully", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data?.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
