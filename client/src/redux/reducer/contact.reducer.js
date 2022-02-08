import {
  CREATE_CONTACT,
  GET_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  GET_ONE_CONTACT,
} from "../constant/types";

const initialState = {
  contacts: [],
  contact: null,
};

export const contactReducer = (state = initialState, action) => {
  console.log({ action });
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    case GET_ONE_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };

    case GET_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      };

    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id == action.payload._id ? action.payload : contact
        ),
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id != action.payload
        ),
      };

    default:
      return state;
  }
};
