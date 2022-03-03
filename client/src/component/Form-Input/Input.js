import React from "react";

const Input = ({ value, onChange, placeholder, type, error, label }) => {
  return (
    <div className="form-group mr-2">
      {error && <div>{error}</div>}
      <label for="floatingInput"> {label} </label>
      <input
        type={type}
        className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
