import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/actions/contact.action";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import Contact from "../../../component/Contacts/Contact-Card/ContactCard";
import { getContact } from "../../../redux/actions/contact.action";
import "./AllContacts.scss";

const AllContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);
  const isLoading = useSelector((state) => state.contact.isLoading);

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
    <>
      <div className="card-list">
        {[...favouriteContacts, ...restContacts].map((contact) => (
          <Contact contact={contact} key={contact._id} />
        ))}
      </div>
    </>
  );
};

export default AllContacts;
