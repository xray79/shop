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

      <section className={s.infoOne} id="info-1">
        <div className={s.flexContainer}>
          <div>
            <img className={s.bagImg} src="./bear.jpg" alt="just a bag" />
          </div>
          <div className={s.infoOneTextContainer}>
            <h2 className={s.infoOneTitle}>Our satisfied customers</h2>
            <p className={s.infoOneParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              illum excepturi quae obcaecati tenetur architecto optio recusandae
              molestias facilis, tempora quisquam quis suscipit adipisci sint.
              Corporis accusantium qui placeat cupiditate! Quam molestias
              inventore nulla ducimus.
            </p>
            <p className={s.infoOneParagraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              autem officiis commodi accusamus dicta minima suscipit eius amet
              quaerat veniam saepe eaque voluptas reprehenderit sed, vel
              asperiores assumenda, dignissimos velit consequatur recusandae
              omnis repellendus inventore nulla. Placeat, atque et! Quas veniam,
              maxime nostrum velit asperiores culpa facere molestias mollitia
              necessitatibus?
            </p>
            <p className={s.infoOneParagraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              expedita reprehenderit exercitationem incidunt eligendi pariatur
              in corporis eius quidem magni.
            </p>
            <button className={`${s.btn} ${s.infoOneBtn}`}>Read More</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
