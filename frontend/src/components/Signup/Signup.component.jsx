import { useState } from "react";
import { Link } from "react-router-dom";
import { PROXY } from "../../utils/config";

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

    fetch(PROXY + "/signup", {
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
    <div className=" w-full h-screen mb-40">
      <h1 className="text-5xl my-12 mx-auto max-w-2xl">Register an account</h1>
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
        <input
          className="w-80 h-12 rounded-lg border-none p-3"
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
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
