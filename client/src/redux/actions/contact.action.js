// Creaing some actions
import { CREATE_CONTACT, GET_CONTACT } from "../constant/types";

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
