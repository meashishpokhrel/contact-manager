import React from "react";

const Input = ({ value, onChange, placeholder, type = "text" }) => {
  return (
    <div className="form-group mr-2">
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
