import { Link } from "react-router-dom";
import s from "./Login.module.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("working");
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Log in here</h1>
      <form
        className={s.form}
        action="/login"
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
        <button className={s.btn} type="submit">
          Log in
        </button>
      </form>
      <div className={s.signupContainer}>
        <p className={s.signupText}>Dont have an account?</p>
        <Link className={s.signupBtn} to="/signup">
          Register here
        </Link>
      </div>
    </div>
  );
};
export default Login;
