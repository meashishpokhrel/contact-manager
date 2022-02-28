import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  getContact,
  editContact,
  getOneContact,
} from "../../redux/actions/contact.action";
import shortid from "shortid";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../../component/Form-Input/Input";
import AuthForm from "../../component/auth-form/authForm";

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

  const [formData, setFormData] = useState({
    name: { value: "", placeholder: "Name", type: "text" },
    email: { value: "", placeholder: "Email", type: "email" },
    phone: { value: "", placeholder: "Phone", type: "text" },
    address: { value: "", placeholder: "Password", type: "text" },
  });

  const state = useEffect(() => {
    if (contact) {
      let newForm = { ...formData };
      newForm.name.value = contact.name;
      newForm.email.value = contact.email;
      newForm.phone.value = contact.phone;
      newForm.address.value = contact.address;
      setFormData(newForm);
      // setName(contact.name);
      // setEmail(contact.email);
      // setPhone(contact.phone);
      // setAddress(contact.address);
    }
  }, [contact]);

  console.log({ name, address, phone, email });

  useEffect(() => {
    dispatch(getOneContact(id));
  }, []);

  const onContactEdit = (e) => {
    e.preventDefault();
    const editedContact = Object.assign(contact, {
      name,
      address,
      phone,
      email,
    });
    dispatch(editContact(editedContact, editedContact._id));
    navigate("/contact");
  };
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

    //  <ContactForm
    //  onchange={} value={} placeholder={}
    //  />
  );
};

export default Editcontact;
