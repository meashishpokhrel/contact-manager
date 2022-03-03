import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/actions/contact.action";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  const { _id, photo } = contact;
  const dispatch = useDispatch();

  return (
    <tr>
      {/* <th scope="row">{contact._id}</th> */}
      <td>
        {photo !== "" ? (
          <Avatar src={contact.photo} size="38" round={true} />
        ) : (
          <Avatar
            src={
              "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            }
            size="38"
            round={true}
          />
        )}
        {/* <Avatar src={contact.photo} size="38" round={true} /> */}
        {contact.name}
      </td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.address}</td>
      <td>
        <div className="custom-control custom-checbox">
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
      </td>
      <td>
        <Link to={`/contact/edit/${contact._id}`}>
          <span className="material-icons">edit</span>
        </Link>
      </td>
      <td>
        <span
          type="button"
          className="material-icons text-danger"
          onClick={() => dispatch(deleteContact(_id))}
        >
          delete
        </span>
      </td>
    </tr>
  );
};

export default Contact;
