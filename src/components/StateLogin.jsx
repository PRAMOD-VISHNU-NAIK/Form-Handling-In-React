import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPass, setEnteredPass] = useState("");

  const [enteredVal, setEnteredValue] = useState({
    email: '',
    pass: ''
  });

  const handleInputChange = (identifier, event) =>{
    setEnteredValue((prevVal) => ({               // Here we are returning a brand new object my making use of prevVal and updating it as per the value of identifier.
      ...prevVal,
      [identifier] :event.target.value,     // Here we are creating a key: val pair so use [identifier]
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: ",enteredVal.email);
    console.log("PassWord: ",enteredVal.pass);
  };

  // const handleEmailChange = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const handlePassChange = (event) => {
  //   setEnteredPass(event.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange('email', event)}
            value={enteredVal.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange('pass', event)}
            value={enteredVal.pass}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
