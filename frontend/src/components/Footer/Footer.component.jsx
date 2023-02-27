import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.mainContainer}>
      <div className={s.footerGrid}>
        <div className={s.gridColumn}>
          <span className={s.columnTitle}>Home</span>
          <ul className={s.columnList}>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam distinctio quod ut eligendi quia. Quod consectetur ut
              numquam suscipit quo!
            </li>
          </ul>
        </div>
        <div className={s.gridColumn}>
          <span className={s.columnTitle}>Shop</span>
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
          <span className={s.columnTitle}>Cart</span>
          <ul className={s.columnList}>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati iusto atque ea veritatis incidunt explicabo accusantium
              error.
            </li>
          </ul>
        </div>
        <div className={s.gridColumn}>
          <span className={s.columnTitle}>Checkout</span>
          <ul className={s.columnList}>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              sunt!
            </li>
          </ul>
        </div>
        <div className={s.gridColumn}>
          <span className={s.columnTitle}>Login</span>
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
