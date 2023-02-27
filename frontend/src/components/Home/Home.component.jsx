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

      <section className={s.featuresSection} id="features">
        <div className={s.featuresContainer}>
          <h2 className={s.featuresTitle}>What We Offer</h2>

          <div className={s.cardsContainer}>
            <div className={s.card}>
              <h3 className={s.cardTitle}>Price</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit quas, quod architecto cupiditate alias numquam
                voluptas! Unde eveniet culpa architecto.
              </p>
            </div>
            <div className={s.card}>
              <h3 className={s.cardTitle}>Delivery</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit quas, quod architecto cupiditate alias numquam
                voluptas! Unde eveniet culpa architecto.
              </p>
            </div>
            <div className={s.card}>
              <h3 className={s.cardTitle}>Convenience</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit quas, quod architecto cupiditate alias numquam
                voluptas! Unde eveniet culpa architecto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
