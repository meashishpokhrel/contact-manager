import axios from "axios";
import { url } from "../../api/index";
import { toast } from "react-toastify";
import { CREATE_USER } from "../constant/types";

export const addUser = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/user`, user)
      .then((user) => {
        dispatch({
          type: CREATE_USER,
          payload: user,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //   .catch((error) => {
    //     toast.error(error.response?.data),
    //       {
    //         position: toast.position.botto,
    //       };
    //   });
  };
};
