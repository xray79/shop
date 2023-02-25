import s from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={`${s.hero}`}>
        <div className={s.container}>
          <div className={s.titleContainer}>
            <h1 className={s.title}>Shop.io</h1>

            <p>add css and layouts here</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
