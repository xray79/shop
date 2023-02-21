import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

const Navbar = () => {
  const { loginToken, setLoginToken } = useContext(LoginContext);

  return (
    <nav className={`${s.Navbar}`}>
      <ul>
        <Link className={`${s.navItem} ${s.home}`} to="/">
          Home
        </Link>
        {loginToken ? (
          <>
            <Link className={`${s.navItem}`} to="shop">
              Shop
            </Link>
            <Link className={`${s.navItem}`} to="cart">
              Cart
            </Link>
          </>
        ) : (
          ""
        )}
        <Link className={`${s.navItem}`} to="about">
          About
        </Link>
        <Link className={`${s.navItem}`} to="contact">
          Contact Us
        </Link>
        {loginToken ? (
          <li
            className={s.logOut}
            onClick={() => {
              setLoginToken("");
            }}
          >
            Log Out
          </li>
        ) : (
          <Link className={`${s.navItem}`} to="login">
            Log In
          </Link>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
