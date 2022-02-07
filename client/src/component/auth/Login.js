import React from "react";

function Login() {
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Log in to the system</div>
      <div className="card-body">
        <form>
          <div className="form-group mr-2">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              // value={name}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              // value={email}
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
