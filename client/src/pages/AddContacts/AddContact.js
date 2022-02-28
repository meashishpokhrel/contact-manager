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
  const [formErrors, setFormErrors] = useState("");

  const [formData, setFormData] = useState({
    name: { value: "", placeholder: "Name", type: "text" },
    email: { value: "", placeholder: "Email", type: "email" },
    phone: { value: "", placeholder: "Phone", type: "text" },
    address: { value: "", placeholder: "Address", type: "text" },
  });

  const createContact = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    const newContact = {
      id: shortid.generate(),
      name: formData.name.value,
      email: formData.email.value,
      phone: formData.phone.value,
      address: formData.address.value,
    };
    if (newContact.name && newContact.phone) {
      dispatch(addContact(newContact));
      navigate("/contact");
    }
  };

  const validate = (formData) => {
    let name = formData.name.value;
    let email = formData.email.value;
    let phone = formData.phone.value;
    let address = formData.address.value;

    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!name) {
      errors.name = "Username is required! ";
    }
    if (!email) {
      errors.email = "Email is required! ";
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format! ";
    }
    if (!phone) {
      errors.phone = "Phone Number is required! ";
    }
    if (!address) {
      errors.address = "Please Enter Address";
    }
    console.log(errors);
    return errors;
  };

  return (
    <>
      <p>
        {Object.values(formErrors).map((x) => {
          return x;
        })}
      </p>
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
