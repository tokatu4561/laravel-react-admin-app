import axios from "axios";
import React, { SyntheticEvent } from "react";
import { useHistory } from "react-router";

import { useInput } from "../hooks/use-input";
import "../Login.css";

const Login = () => {
  const history = useHistory();
  const { value: emailValue, valueChangeHandler: onChangeEmail } = useInput(
    (value: string) => value.trim() === ""
  );
  const { value: passwordValue, valueChangeHandler: onChangePassword } =
    useInput((value: string) => value.trim() === "");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        {
          email: emailValue,
          password: passwordValue,
        },
        { withCredentials: true }
      );

      await history.push("/");
    } catch (error) {}
  };

  return (
    <main className="form-signin">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Login;
