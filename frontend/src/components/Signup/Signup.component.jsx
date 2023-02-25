import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userEmail: email,
      userPassword: password,
      userConfirmPassword: confirmPassword,
    };

    fetch("./api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Register an account</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={s.input}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className={s.input}
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button className={s.btn} type="submit">
          Signup
        </button>
      </form>
      <div className={s.signupContainer}>
        <p className={s.signupText}>Already have an account?</p>
        <Link className={s.signupBtn} to="/login">
          Log in here
        </Link>
      </div>
    </div>
  );
};
export default Signup;
