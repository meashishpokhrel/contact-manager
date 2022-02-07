import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Contact Manager
        </Link>

        <Link to="/signin" className="btn btn-warning">
          Sigin
        </Link>

        <Link to="/signup" className="btn btn-warning">
          Signup
        </Link>

        <Link to="/contact/add" className="btn btn-warning">
          Add Contacts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
