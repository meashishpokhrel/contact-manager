import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions/auth.action";

function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    // e.preventDefault();
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };
    // console.log("new user" + newUser.name);
    dispatch(addUser(newUser));
    console.log(newUser);
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">New User ? Register Please !</div>
      <div className="card-body">
        <form onSubmit={(e) => createUser(e)}>
          <div className="form-group mr-2">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="Password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassowrd(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
