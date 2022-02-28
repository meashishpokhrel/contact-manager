import React from "react";

const Input = ({ value, onChange, placeholder, type }) => {
  return (
    <div className="form-group mr-2">
      {/* <p>Hello</p> */}
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
