import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions/contact.action";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";
import Input from "../../component/Form-Input/Input";
import ContactForm from "../../component/contact-form/contactForm";

const Addcontact = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: { value: "", placeholder: "Name", type: "text" },
    email: { value: "", placeholder: "Email", type: "email" },
    phone: { value: "", placeholder: "Phone", type: "text" },
    address: { value: "", placeholder: "Password", type: "text" },
  });

  const createContact = (e) => {
    e.preventDefault();
    const newContact = {
      id: shortid.generate(),
      name: formData.name.value,
      email: formData.email.value,
      phone: formData.phone.value,
      address: formData.address.value,
    };
    dispatch(addContact(newContact));
    navigate("/contact");
  };

  return (
    <>
      <ContactForm
        handleSubmit={createContact}
        formData={formData}
        setFormData={setFormData}
        header={"Add New Contact"}
        buttonName={"Add Contact"}
      />
    </>
  );
};

export default Addcontact;
