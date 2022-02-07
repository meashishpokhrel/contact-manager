import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions/contact.action";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  const { id } = contact;
  const dispatch = useDispatch();
  return (
    <tr>
      <th scope="row">{contact.id}</th>
      <td>
        <Avatar src={contact.photo} size="38" round={true} /> {contact.name}
      </td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.address}</td>
      <td>
        <div className="custom-control custom-checbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Link to={`/contact/edit/${contact.id}`}>
          <span className="material-icons">edit</span>
        </Link>
      </td>
      <td>
        <span
          type="button"
          className="material-icons text-danger"
          onClick={() => dispatch(deleteContact(id))}
        >
          delete
        </span>
      </td>
    </tr>
  );
};

export default Contact;
