import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate, Link } from "react-router-dom";

import { signIn } from "../../redux/actions/auth.action";
import Input from "../../component/Form-Input/Input";
import AuthForm from "../../component/auth-form/authForm";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [formErrors, setFormErrors] = useState("");

  const [formData, setFormData] = useState({
    email: { value: "", placeholder: "Email", type: "email", label: "Email" },
    password: {
      value: "",
      placeholder: "Password",
      type: "password",
      label: "Password",
    },
  });

  const loginUser = (e) => {
    e.preventDefault();
    console.log("hitting t");
    setFormErrors(validate(formData));
    let email = formData.email.value;
    let password = formData.password.value;
    dispatch(
      signIn(email, password, () => {
        navigate("/contact");
      })
    );
  };

  const validate = (formData) => {
    let email = formData.email.value;
    let password = formData.password.value;

    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      errors.email = "Email is required! ";
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format! ";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <>
      <AuthForm
        handleSubmit={loginUser}
        formData={formData}
        setFormData={setFormData}
        header={"Login in"}
        buttonName={"Login"}
        errors={formErrors}
      />
    </>
  );
};

export default Login;
