import { CREATE_USER } from "../constant/types";

const initialState = [];

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return [action.payload, ...state];
    default:
      return state;
  }
};
