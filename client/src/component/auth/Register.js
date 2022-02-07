import React from "react";

function Register() {
  return (
    <div className="card border-0 shadow">
      <div className="card-header">New User ? Register Please !</div>
      <div className="card-body">
        <form>
          <div className="form-group mr-2">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              // value={name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              // value={email}
            />
          </div>
          <div className="form-group">
            <input
              type="Password"
              className="form-control"
              placeholder="Password"
              // value={phone}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              // value={address}
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
