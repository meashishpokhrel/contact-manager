import React from "react";
import Input from "../Form-Input/Input";

const ContactForm = ({}) => {
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add new Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onContactEdit(e)}>
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
          {/* <Input
            type="file"
            placeholder="Picture"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          /> */}

          <button className="btn btn-primary" type="submit">
            Edit Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
