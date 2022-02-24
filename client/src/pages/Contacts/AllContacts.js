import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions/contact.action";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import Contact from "../../component/contact/Contact";
import { getContact } from "../../redux/actions/contact.action";
const AllContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);

  const favouriteContacts = contacts
    .filter(({ favourite }) => favourite)
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  const restContacts = contacts.filter(({ favourite }) => !favourite);

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);
  return (
    <table className="table table-dark">
      <thead>
        <tr>
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
        {[...favouriteContacts, ...restContacts].map((contact) => (
          <Contact contact={contact} key={contact._id} />
        ))}
      </tbody>
    </table>
  );
};

export default AllContacts;
