import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signIn } from "../../redux/actions/auth.action";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const loginUser = (e) => {
    e.preventDefault();

    // console.log("new user" + newUser.name);
    dispatch(
      signIn(email, password, () => {
        navigate("/contact");
      })
    );
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Log in to the system</div>
      <div className="card-body">
        <form onSubmit={(e) => loginUser(e)}>
          <div className="form-group mr-2">
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
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
