import axios from "axios";
import { url } from "../../api";
import { toast } from "reat-toastify";
import { CREATE_USER } from "../constant/types";

export const createUser = (user) => {
  return (dispatch) => {
    axios.post(`${url}/user`, user).then((user) => {
      dispatch({
        type: CREATE_USER,
        payload: user,
      });
    });
    //   .catch((error) => {
    //     toast.error(error.response?.data),
    //       {
    //         position: toast.position.botto,
    //       };
    //   });
  };
};
