import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions/contact.action";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import Contact from "./Contact";
const AllContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);

  console.log({ contacts });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Favourite</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </tbody>
    </table>
  );
};

export default AllContacts;
