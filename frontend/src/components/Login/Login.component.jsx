import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
import { PROXY } from "../../utils/config";

const Login = () => {
  const { loginToken, setLoginToken } = useContext(LoginContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(PROXY + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: email,
        userPassword: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.token) {
          setLoginToken(json.token);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const [isInitialRender, setIsInitialRender] = useState(true);
  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
    } else if (loginToken) {
      navigate("/shop");
    }
  }, [loginToken]);

  return (
    <div className="mb-40">
      <h1 className="max-w-2xl my-12 mx-auto text-5xl">Log in here</h1>
      <form
        className="bg-slate-400 rounded-lg flex flex-col items-center gap-6 py-8 max-w-2xl my-12 mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          className="w-80 h-12 rounded-lg border-none p-3"
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
          className="w-80 h-12 rounded-lg border-none p-3"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="py-4 px-8 rounded-lg border-none bg-blue-100 transition-all hover:-translate-y-2 active:translate-y-1"
          type="submit"
        >
          Log in
        </button>
        <p>Login: a</p>
        <p>Password: asdfgh</p>
      </form>
      <div className="max-w-2xl mx-auto p-4 rounded-lg text-center">
        <p className="mb-6">Dont have an account?</p>
        <Link
          className="py-4 px-8 rounded-lg border-none bg-blue-100"
          to="/signup"
        >
          Register here
        </Link>
      </div>
    </div>
  );
};
export default Login;
