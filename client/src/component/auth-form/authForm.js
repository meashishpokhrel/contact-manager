import React from "react";
import Input from "../Form-Input/Input";

const AuthForm = (props) => {
  return (
    <div className="card border-0 shadow">
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        <form onSubmit={(e) => loginUser(e)}>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
