import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
import { PROXY } from "../../utils/config";

const Login = () => {
  const { loginToken, setLoginToken } = useContext(LoginContext);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  // redirect to shop only if it is not initial render and if there is a login token
  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
    } else if (loginToken) {
      navigate("/shop");
    }
  }, [loginToken]);

  // form submit handler
  const handleSubmit = e => {
    e.preventDefault();

    // fetch request
    fetch(PROXY + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(json => {
        // redirect if there is a token, otherwise show error message
        if (json.token) {
          setLoginToken(json.token);
        } else {
          setMessage(json.message);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  // form change handler
  const handleFormChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-40 min-h-screen">
      <h1 className="max-w-2xl my-12 mx-auto text-5xl">Log in here</h1>
      {message ? <p className="mx-auto w-1/2">Error: {message}</p> : ""}
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
          value={form.email}
          onChange={e => {
            handleFormChange(e);
          }}
        />
        <input
          className="w-80 h-12 rounded-lg border-none p-3"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={form.password}
          onChange={e => {
            handleFormChange(e);
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
