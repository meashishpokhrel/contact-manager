import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  getContact,
  editContact,
  getOneContact,
} from "../../../redux/actions/contact.action";
import shortid from "shortid";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../../../component/Form-Input/Input";
import AuthForm from "../../../component/Authentication/Auth-Form/AuthForm";
import ContactForm from "../../../component/Contacts/Contact-Form/contactForm";

const Editcontact = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const contact = useSelector((state) => state.contact.contact);

  const [formData, setFormData] = useState({
    name: {
      value: "",
      placeholder: "Name",
      type: "text",
      label: "Update Name",
    },
    email: {
      value: "",
      placeholder: "Email",
      type: "email",
      label: "Update Email",
    },
    mobileNumber: {
      value: "",
      placeholder: "Phone",
      type: "number",
      label: "Phone Mobile Number",
    },
    homeNumber: {
      value: "",
      placeholder: "Phone",
      type: "number",
      label: "Home Number",
    },
    workNumber: {
      value: "",
      placeholder: "Phone",
      type: "number",
      label: "Work Number",
    },
    address: {
      value: "",
      placeholder: "Address",
      type: "text",
      label: "Update Address",
    },
    photo: {
      defaultValue: "",
      placeholder: "Address",
      type: "file",
      label: "Update Picture",
    },
  });

  const state = useEffect(() => {
    if (contact) {
      let newForm = { ...formData };
      newForm.name.value = contact.name;
      newForm.email.value = contact.email;
      newForm.mobileNumber.value = contact.phone.mobileNumber;
      newForm.homeNumber.value = contact.phone.homeNumber;
      newForm.workNumber.value = contact.phone.workNumber;
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
      phone: {
        mobileNumber: formData.mobileNumber.value,
        homeNumber: formData.homeNumber.value,
        workNumber: formData.workNumber.value,
      },
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
