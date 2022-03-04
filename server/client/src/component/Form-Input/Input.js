import React from "react";
import "./Input.scss";

const Input = ({ value, onChange, placeholder, type, error, label }) => {
  return (
    <div className="form-input">
      {error && <div className="error">{error}</div>}
      <input
        type={type}
        className="form-input__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={label} className="form-input__label">
        {" "}
        {label}{" "}
      </label>
    </div>
  );
};

export default Input;
