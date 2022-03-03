import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/actions/contact.action";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import "./Contact.scss";

const Contact = ({ contact }) => {
  const { _id, photo } = contact;
  const dispatch = useDispatch();

  return (
    // <div className="card-container">
    <div className="card">
      <div className="card__body">
        {photo !== "" ? (
          <img src={contact.photo} className="card__image" />
        ) : (
          <img
            src={
              "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            }
            className="card__image"
          />
        )}

        <div className="custom-control custom-checbox">
          <h2 className="card__title">{contact.name}</h2>
          <input
            type="checkbox"
            className="custom-control-input"
            checked={contact.favourite}
            onChange={(e) => {
              dispatch(
                editContact(
                  { ...contact, favourite: e.target.checked },
                  contact._id
                )
              );
            }}
          />
          <label className="custom-control-label"></label>
        </div>
        <div className="card-details-wrapper">
          <div className="card-details">
            <p className="card__description">Email: {contact.email}</p>
            <p className="card__description">Phone: {contact.phone}</p>
            <p className="card__description">Address: {contact.address}</p>
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/contact/edit/${contact._id}`}>
            <div className="material-icons">edit</div>
          </Link>

          <div
            type="button"
            className="material-icons text-danger"
            onClick={() => dispatch(deleteContact(_id))}
          >
            delete
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Contact;
