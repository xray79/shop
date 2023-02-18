import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";

const Navbar = () => {
  const { appToken, setAppToken } = useContext(AppContext);

  return (
    <nav className={`${s.Navbar}`}>
      <ul>
        <Link className={`${s.navItem} ${s.home}`} to="/">
          Home
        </Link>
        {appToken ? (
          <Link className={`${s.navItem}`} to="shop">
            Shop
          </Link>
        ) : (
          ""
        )}
        <Link className={`${s.navItem}`} to="about">
          About
        </Link>
        <Link className={`${s.navItem}`} to="contact">
          Contact Us
        </Link>
        {appToken ? (
          <li
            className={s.logOut}
            onClick={() => {
              setAppToken("");
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
