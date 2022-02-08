import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions/contact.action";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";

const Addcontact = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");

  const createContact = (e) => {
    e.preventDefault();
    const newContact = {
      id: shortid.generate(),
      name,
      email,
      phone,
      address,
      photo,
    };
    console.log("New Contact" + newContact.name);
    dispatch(addContact(newContact));
    navigate("/contact");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add new Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
          <Input
            value={name}
            placeholder={"Name"}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            type="file"
            placeholder="Picture"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcontact;
