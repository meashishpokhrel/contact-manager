import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/actions/auth.action";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = (e) => {
    dispatch(signOut());
    navigate("/");
  };
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

        <button className="btn btn-warning" onClick={(e) => handleSignOut(e)}>
          Signout
        </button>

        <Link to="/contact/add" className="btn btn-warning">
          Add Contacts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
