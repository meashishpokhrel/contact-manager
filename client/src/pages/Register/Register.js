import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/actions/auth.action";
import { useNavigate } from "react-router-dom";
import Input from "../../component/Form-Input/Input";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };
    dispatch(
      addUser(newUser, () => {
        navigate("/contact");
      })
    );
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">New User ? Register Please !</div>
      <div className="card-body">
        <form onSubmit={(e) => createUser(e)}>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
