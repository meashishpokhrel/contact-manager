// Creaing some actions
import axios from "axios";
import { url } from "../../api/index";
import {
  CREATE_CONTACT,
  GET_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from "../constant/types";

export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
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
