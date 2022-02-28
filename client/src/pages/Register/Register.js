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
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassowrd] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    name: { value: "", placeholder: "Name", type: "text" },
    email: { value: "", placeholder: "Email", type: "email" },
    password: { value: "", placeholder: "Password", type: "password" },
  });

  const createUser = (e) => {
    e.preventDefault();
    console.log("hitted");
    const newUser = {
      name: formData.name.value,
      email: formData.email.value,
      password: formData.password.value,
    };
    console.log(newUser);
    dispatch(
      addUser(newUser, () => {
        navigate("/contact");
      })
    );
  };

  return (
    // <div className="card border-0 shadow">
    //   <div className="card-header">New User ? Register Please !</div>
    //   <div className="card-body">
    //     <form onSubmit={(e) => createUser(e)}>
    //       <Input
    //         placeholder="Name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //       <Input
    //         placeholder="Email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <Input
    //         type="Password"
    //         placeholder="Password"
    //         value={password}
    //         onChange={(e) => setPassowrd(e.target.value)}
    //       />
    //       <button className="btn btn-primary" type="submit">
    //         Register
    //       </button>
    //     </form>
    //   </div>
    // </div>

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
