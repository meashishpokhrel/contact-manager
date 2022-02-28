import React from "react";

const Input = ({ value, onChange, placeholder, type, error }) => {
  return (
    <div className="form-group mr-2">
      {error && <div>{error}</div>}
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
