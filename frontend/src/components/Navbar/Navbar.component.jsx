import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";

const Navbar = () => {
  const { loginToken, setLoginToken } = useContext(LoginContext);

  return (
    <nav className="w-full bg-slate-300 py-6 px-8 top-0 h-20">
      <ul className="flex items-center justify-center list-none">
        <Link className="mx-4 mr-auto" to="/">
          Home
        </Link>
        {loginToken ? (
          <>
            <Link className="mx-4" to="shop">
              Shop
            </Link>
            <Link className="mx-4" to="cart">
              Cart
            </Link>
          </>
        ) : (
          ""
        )}
        {loginToken ? (
          <Link
            className="ml-4 cursor-pointer"
            onClick={() => {
              setLoginToken("");
            }}
          >
            Log Out
          </Link>
        ) : (
          <Link className="mx-4" to="login">
            Log In
          </Link>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
