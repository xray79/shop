import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li className={styles.home}>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Log In</li>
      </ul>
    </div>
  );
};
export default Navbar;
