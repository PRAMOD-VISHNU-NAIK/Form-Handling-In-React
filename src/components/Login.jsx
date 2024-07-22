import { useRef, useState } from "react";

export default function Login() {

  const email = useRef();
  const pass = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPass = pass.current.value;

    console.log("Email: ", enteredEmail);
    console.log("PassWord: ", enteredPass);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" ref={email}/>
          </div>

          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" ref={pass} />
          </div>
        </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
