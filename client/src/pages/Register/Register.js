import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/actions/auth.action";
import { useNavigate } from "react-router-dom";
import Input from "../../component/Form-Input/Input";
import AuthForm from "../../component/auth-form/authForm";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: { value: "", placeholder: "Name", type: "text" },
    email: { value: "", placeholder: "Email", type: "email" },
    password: { value: "", placeholder: "Password", type: "password" },
  });

  const createUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formData.name.value,
      email: formData.email.value,
      password: formData.password.value,
    };
    dispatch(
      addUser(newUser, () => {
        navigate("/contact");
      })
    );
  };

  return (
    <>
      <AuthForm
        handleSubmit={createUser}
        formData={formData}
        setFormData={setFormData}
        header={"New User ? Register Please !"}
        buttonName={"Register"}
      />
    </>
  );
}

export default Register;
