import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signIn } from "../../redux/actions/auth.action";
import Input from "../../component/Form-Input/Input";
import AuthForm from "../../component/auth-form/authForm";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: { value: "", placeholder: "Email", type: "email" },
    password: { value: "", placeholder: "Password", type: "password" },
  });

  const loginUser = (e) => {
    e.preventDefault();
    let email = formData.email.value;
    let password = formData.password.value;
    dispatch(
      signIn(email, password, () => {
        navigate("/contact");
      })
    );
  };

  return (
    <>
      <AuthForm
        handleSubmit={loginUser}
        formData={formData}
        setFormData={setFormData}
        header={"Already Created ! Login in Here Please !"}
        buttonName={"Login"}
      />
    </>
  );
};

export default Login;
