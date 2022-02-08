// Creaing some actions
import axios from "axios";
import { url } from "../../api/index";
import { toast } from "react-toastify";

import {
  CREATE_CONTACT,
  GET_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from "../constant/types";

export const addContact = (contact) => {
  return (dispatch) => {
    axios
      .post(`${url}/contacts`, contact, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      })
      .then((contact) => {
        dispatch({
          type: CREATE_CONTACT,
          payload: contact,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data?.msg, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

export const editContact = (contact) => ({
  type: EDIT_CONTACT,
  payload: contact,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});
