import React from "react";
import Input from "../Form-Input/Input";

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
    console.log(keyName);
    if (keyName === "photo") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newFormData[keyName].defaultValue = reader.result;
        console.log(reader.result);
      };
      console.log("photo triggered");
    }
    setFormData(newFormData);
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">{header}</div>
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          {Object.keys(formData).map((c, index) => (
            <Input
              key={index}
              placeholder={formData[c].placeholder}
              type={formData[c].type}
              value={formData[c].value}
              onChange={(e) => handleChange(e, c)}
              error={errors[c]}
            />
          ))}

          <button className="btn btn-primary" type="submit">
            {buttonName}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
