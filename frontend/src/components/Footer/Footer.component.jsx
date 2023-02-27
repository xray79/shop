import s from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={s.mainContainer}>
      <div className={s.footerGrid}>
        <div className={s.gridColumn}>
          <Link to={"/"} className={s.columnTitle}>
            Home
          </Link>
          <ul className={s.columnList}>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam distinctio quod ut eligendi quia. Quod consectetur ut
              numquam suscipit quo!
            </li>
          </ul>
        </div>
        <div className={s.gridColumn}>
          <Link to={"/shop"} className={s.columnTitle}>
            Shop
          </Link>
          <ul className={s.columnList}>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              error incidunt neque molestias ratione maxime magni nobis
              mollitia.
            </li>
          </ul>
        </div>
        <div className={s.gridColumn}>
          <Link to={"/cart"} className={s.columnTitle}>
            Cart
          </Link>
          <ul className={s.columnList}>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati iusto atque ea veritatis incidunt explicabo accusantium
              error.
            </li>
          </ul>
        </div>
        <div className={s.gridColumn}>
          <Link to={"/checkout"} className={s.columnTitle}>
            Checkout
          </Link>
          <ul className={s.columnList}>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              sunt!
            </li>
          </ul>
        </div>
        <div className={s.gridColumn}>
          <Link to={"Login"} className={s.columnTitle}>
            Login
          </Link>
          <ul className={s.columnList}>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dolorum aut delectus minima aliquam quidem. Aliquid consequuntur
              quasi autem! Eum.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
