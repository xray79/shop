import s from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className={`${s.hero}`}>
        <div className={s.flexContainer}>
          <div className={s.titleContainer}>
            <h1 className={s.title}>Shop.io</h1>

            <p className={s.subtitle}>Start Shopping today</p>
            <Link to={"/signup"} className={`${s.btn} ${s.btnCta}`}>
              Sign up now
            </Link>
          </div>
          <img
            className={s.mainImg}
            src="./web-shopping.svg"
            alt=""
            srcset=""
          />
        </div>
      </section>
    </>
  );
};
export default Home;
