import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  getContact,
  editContact,
} from "../../redux/actions/contact.action";
import shortid from "shortid";
import { useParams, useNavigate } from "react-router-dom";

const Editcontact = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setEmail(contact.email);
      setAddress(contact.address);
      setPhone(contact.phone);
      //   setPhoto(contact.photo);
    }
    dispatch(getContact(id));
  }, [contact]);

  const onContactEdit = (e) => {
    e.preventDefault();
    const editedContact = Object.assign(contact, {
      name,
      address,
      phone,
      email,
    });
    dispatch(editContact(editedContact));
    console.log(editedContact);
    navigate("/contact");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add new Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onContactEdit(e)}>
          <div className="form-group mr-2">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control"
              placeholder="Picture"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            EDit Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default Editcontact;
