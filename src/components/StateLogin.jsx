import { useState } from "react";
import Input from "./Input";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPass, setEnteredPass] = useState("");

  const [enteredVal, setEnteredValue] = useState({
    email: "",
    pass: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    pass: false,
  });

  const invalidEmail = didEdit.email && !enteredVal.email.includes("@");
  const invalidPass = didEdit.pass && !enteredVal.pass.length < 6;

  const handleInputChange = (identifier, event) => {
    setEnteredValue((prevVal) => ({
      // Here we are returning a brand new object my making use of prevVal and updating it as per the value of identifier.
      ...prevVal,
      [identifier]: event.target.value, // Here we are creating a key: val pair so use [identifier]
    }));

    setDidEdit((prev) => ({
      ...prev,
      [identifier]: false,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: ", enteredVal.email);
    console.log("PassWord: ", enteredVal.pass);
  };

  // const handleEmailChange = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const handlePassChange = (event) => {
  //   setEnteredPass(event.target.value);
  // };

  const handleInputBlur = (identifier) => {
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event)}
          value={enteredVal.email}
          error={invalidEmail && "Invalid Email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("pass")}
          onChange={(event) => handleInputChange("pass", event)}
          value={enteredVal.pass}
          error={invalidPass && "Invalid Pass"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
