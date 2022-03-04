import React from "react";
import { Navigate, Link } from "react-router-dom";
import Input from "../../Form-Input/Input";
import "./AuthForm.scss";

const AuthForm = ({
  handleSubmit,
  formData,
  setFormData,
  header,
  buttonName,
  errors,
  label,
}) => {
  const handleChange = (e, keyName) => {
    let newFormData = { ...formData };
    newFormData[keyName].value = e.target.value;
    setFormData(newFormData);
  };

  return (
    <div className="wrapper">
      <div className="title login">{header}</div>
      <div className="form-inner">
        <form className="login" onSubmit={(e) => handleSubmit(e)}>
          {Object.keys(formData).map((c, index) => (
            <Input
              key={index}
              placeholder={formData[c].placeholder}
              type={formData[c].type}
              value={formData[c].value}
              onChange={(e) => handleChange(e, c)}
              error={errors[c]}
              label={formData[c].label}
            />
          ))}
          <div className="field btn">
            <div className=" btn-layer"></div>
            <input type="submit" value={buttonName}></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
