import s from "./Login.module.css";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

const Login = () => {
  const { appToken, setAppToken } = useContext(AppContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userEmail: email,
      userPassword: password,
    };

    fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        setAppToken(json.token);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const [isInitialRender, setIsInitialRender] = useState(true);
  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
    } else {
      navigate("/shop");
    }
  }, [appToken]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Log in here</h1>
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
