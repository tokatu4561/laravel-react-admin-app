import axios from "axios";
import React, { SyntheticEvent } from "react";

import { useInput } from "../hooks/use-input";
import "../Login.css";

const Register = () => {
  const { value: firstNameValue, valueChangeHandler: firstNameChange } =
    useInput((value: string) => value.trim() === "");
  const { value: lastNameValue, valueChangeHandler: lastNameChange } = useInput(
    (value: string) => value.trim() === ""
  );
  const { value: emailValue, valueChangeHandler: onChangeEmail } = useInput(
    (value: string) => value.trim() === ""
  );
  const { value: passwordValue, valueChangeHandler: onChangePassword } =
    useInput((value: string) => value.trim() === "");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8000/api/register", {
      first_name: firstNameValue,
      last_name: lastNameValue,
      email: emailValue,
      password: passwordValue,
      password_confirm: passwordValue,
    });

    console.log(response);
  };

  return (
    <main className="form-signin">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <input
          className="form-control"
          placeholder="First Name"
          required
          value={firstNameValue}
          onChange={firstNameChange}
        />

        <input
          className="form-control"
          placeholder="Last Name"
          required
          value={lastNameValue}
          onChange={lastNameChange}
        />

        <input
          type="email"
          className="form-control"
          placeholder="Email"
          required
          value={emailValue}
          onChange={onChangeEmail}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          value={passwordValue}
          onChange={onChangePassword}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password Confirm"
          required
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Register;
