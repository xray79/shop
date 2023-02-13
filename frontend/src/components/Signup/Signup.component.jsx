import { Link } from "react-router-dom";
import s from "./Signup.module.css";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("working");
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Register an account</h1>
      <form
        className={s.form}
        action="/signup"
        method="post"
        onSubmit={handleSubmit}
      >
        <input
          className={s.input}
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <input
          className={s.input}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input
          className={s.input}
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="Confirm Password"
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
