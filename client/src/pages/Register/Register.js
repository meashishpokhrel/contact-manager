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

  const [formErrors, setFormErrors] = useState("");

  const [formData, setFormData] = useState({
    name: { value: "", placeholder: "Name", type: "text", label: "Name" },
    email: { value: "", placeholder: "Email", type: "email", label: "Email" },
    password: {
      value: "",
      placeholder: "Password",
      type: "password",
      label: "Password",
    },
  });

  const createUser = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
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

  const validate = (formData) => {
    let name = formData.name.value;
    let email = formData.email.value;
    let password = formData.password.value;

    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!name) {
      errors.name = "Username is required! ";
    }
    if (!email) {
      errors.email = "Email is required! ";
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format! ";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 4) {
      errors.password = "Password must be more than 4 characters1 ";
    } else if (password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters! ";
    }
    console.log(errors);
    return errors;
  };

  return (
    <>
      <AuthForm
        handleSubmit={createUser}
        formData={formData}
        setFormData={setFormData}
        header={"New User ? Register Please !"}
        buttonName={"Register"}
        errors={formErrors}
      />
    </>
  );
}

export default Register;
