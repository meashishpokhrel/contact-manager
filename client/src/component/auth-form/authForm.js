import React from "react";
import Input from "../Form-Input/Input";

// const AuthForm = (props) => {
//   return (
//     <div className="card border-0 shadow">
//       <div className="card-header">{props.header}</div>
//       <div className="card-body">
//         <form onSubmit={(e) => loginUser(e)}>
//           <Input
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             type="Password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button className="btn btn-primary" type="submit">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

const AuthForm = ({
  handleSubmit,
  formData,
  setFormData,
  header,
  buttonName = "login",
}) => {
  const handleChange = (e, keyName) => {
    let newFormData = { ...formData };
    newFormData[keyName].value = e.target.value;
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

export default AuthForm;
