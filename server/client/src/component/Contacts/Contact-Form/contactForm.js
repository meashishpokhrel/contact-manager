import React from "react";
import Input from "../../Form-Input/Input";
import "./contactForm.scss";

const ContactForm = ({
  handleSubmit,
  formData,
  setFormData,
  header,
  buttonName,
  errors,
}) => {
  const handleChange = (e, keyName) => {
    let newFormData = { ...formData };
    newFormData[keyName].value = e.target.value;
    if (keyName === "photo") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newFormData[keyName].defaultValue = reader.result;
      };
    }
    setFormData(newFormData);
  };

  return (
    <div className="contact-wrapper">
      <div className="title login">{header}</div>
      <div className="contact-form-inner">
        <form onSubmit={(e) => handleSubmit(e)}>
          {Object.keys(formData).map((c, index) => (
            <Input
              key={index}
              placeholder={formData[c].placeholder}
              type={formData[c].type}
              value={formData[c].value}
              label={formData[c].label}
              onChange={(e) => handleChange(e, c)}
              error={errors[c]}
            />
          ))}

          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value={buttonName}></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
