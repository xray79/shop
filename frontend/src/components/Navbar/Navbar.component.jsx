import s from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={`${s.Navbar}`}>
      <ul>
        <Link className={`${s.navItem} ${s.home}`} to="/">
          Home
        </Link>
        <Link className={`${s.navItem}`} to="shop">
          Shop
        </Link>
        <Link className={`${s.navItem}`} to="about">
          About
        </Link>
        <Link className={`${s.navItem}`} to="contact">
          Contact Us
        </Link>
        <Link className={`${s.navItem}`} to="login">
          Log In
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
