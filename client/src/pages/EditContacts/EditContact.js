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
import ContactForm from "../../component/contact-form/contactForm";

const Editcontact = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const contact = useSelector((state) => state.contact.contact);

  const [formData, setFormData] = useState({
    name: { value: "", placeholder: "Name", type: "text" },
    email: { value: "", placeholder: "Email", type: "email" },
    phone: { value: "", placeholder: "Phone", type: "text" },
    address: { value: "", placeholder: "Address", type: "text" },
    photo: { defaultValue: "", placeholder: "Address", type: "file" },
  });

  const state = useEffect(() => {
    console.log(contact);
    if (contact) {
      let newForm = { ...formData };
      newForm.name.value = contact.name;
      newForm.email.value = contact.email;
      newForm.phone.value = contact.phone;
      newForm.address.value = contact.address;
      newForm.photo.defaultValue = contact.photo;
      setFormData(newForm);
    }
  }, [contact]);

  useEffect(() => {
    dispatch(getOneContact(id));
  }, []);

  const onContactEdit = (e) => {
    e.preventDefault();
    const editedContact = Object.assign(contact, {
      name: formData.name.value,
      address: formData.address.value,
      phone: formData.phone.value,
      email: formData.email.value,
      photo: formData.photo.defaultValue,
    });
    dispatch(editContact(editedContact, editedContact._id));
    navigate("/contact");
  };
  return (
    <>
      <ContactForm
        handleSubmit={onContactEdit}
        formData={formData}
        setFormData={setFormData}
        header={"Edit Your Contact"}
        buttonName={"Edit Contact"}
        errors={""}
      />
    </>
  );
};

export default Editcontact;
