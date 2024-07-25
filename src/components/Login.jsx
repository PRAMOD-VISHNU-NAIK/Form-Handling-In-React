import { useRef, useState } from "react";

export default function Login() {

  const email = useRef();
  const pass = useRef();

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPass = pass.current.value;

    // console.log("Email: ", enteredEmail);
    // console.log("PassWord: ", enteredPass);

    const emailIsValid = enteredEmail.includes("@");

    if(!emailIsValid){
      setEmailIsInvalid(true);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" ref={email}/>
            <div className="control-error">
              {emailIsInvalid && <p>Please Enter Valid Email!</p>}
            </div>
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
