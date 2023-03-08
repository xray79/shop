import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PROXY } from "../../utils/config";

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    fetch(PROXY + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(json => {
        if (json.message) setMessage(json.message);
        if (json.message === "signup successful, redirecting...") {
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      });
  };

  const handleFormChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className=" w-full h-screen mb-40">
      <h1 className="text-5xl my-12 mx-auto max-w-2xl">Register an account</h1>
      {message ? <p className="w-1/2 mx-auto">{message}</p> : ""}
      <form
        className="bg-slate-400 rounded-lg flex flex-col items-center gap-6 py-8 px-0 my-12 mx-auto max-w-2xl"
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
        <input
          className="w-80 h-12 rounded-lg border-none p-3"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={e => {
            handleFormChange(e);
          }}
        />
        <button
          className="py-4 px-8 rounded-lg border-none bg-blue-100 transition-all hover:-translate-y-1 active:translate-y-1"
          type="submit"
        >
          Signup
        </button>
      </form>
      <div className="max-w-2xl mx-auto p-4 rounded-lg text-center">
        <p className="mb-6">Already have an account?</p>
        <Link
          className="py-4 px-8 rounded-lg border-none bg-blue-100"
          to="/login"
        >
          Log in here
        </Link>
      </div>
    </div>
  );
};
export default Signup;
