import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <Link className={styles.home} to="/">
          Home
        </Link>
        <Link to="shop">Shop</Link>
        <li>About</li>
        <li>Contact Us</li>
        <li>Log In</li>
      </ul>
    </div>
  );
};
export default Navbar;
