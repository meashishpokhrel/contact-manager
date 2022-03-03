import React from "react";
import Input from "../Form-Input/Input";
import "./authForm.scss";

const AuthForm = ({
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
    setFormData(newFormData);
  };

  return (
    <div className="auth-form-container">
      <div className="form-header">{header}</div>
      <div className="">
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

          <button className="" type="submit">
            {buttonName}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
