import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/actions/auth.action";
import { useSelector } from "react-redux";
import "./Navbar.scss";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = (e) => {
    dispatch(signOut());
    navigate("/");
  };

  const auth = useSelector((state) => state.auth);

  return (
    <nav className="navbar">
      <div className="container">
        {auth.token ? (
          <>
            <Link to="/contact" className="navbar-title">
              Contact Manager
            </Link>

            <button
              className="nav-button primary"
              onClick={(e) => handleSignOut(e)}
            >
              Signout
            </button>
            <Link to="/contact/add" className="nav-button secondary">
              Add Contacts
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className="navbar-title">
              Contact Manager
            </Link>
            <Link to="/signin" className="nav-button primary">
              Sign In
            </Link>
            <Link to="/signup" className="nav-button secondary">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
