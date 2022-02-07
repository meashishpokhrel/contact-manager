import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/store";

function Addcontact() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");

  const createContact = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      email,
      phone,
      address,
      photo,
    };
    dispatch(addContact(newContact));
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add new Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
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
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addcontact;
