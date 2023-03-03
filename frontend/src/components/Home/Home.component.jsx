import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel.component";
import Cards from "./Cards.component";

const Home = () => {
  return (
    <>
      <section className="bg-slate-50 h-screen w-full relative">
        <img
          className="w-full h-screen object-cover"
          src="./desk.webp"
          alt=""
        />
        <div className="bg-black/40 absolute top-0 left-0 w-full h-screen" />
        <div className="textContainer text-gray-200 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl">Shop</h1>
          <p className="mb-8">Start Shopping today</p>
          <Link
            to={"/signup"}
            className="border-none py-2 px-4 rounded-lg bg-red-500 inline-block"
          >
            Sign up now
          </Link>
        </div>
      </section>

      <section className="carouselSection px-20 py-8">
        <Carousel />
      </section>

      <section className="cardSection w-full bg-emerald-100" id="cards">
        <Cards />
      </section>

      <section
        className="customersSection w-full bg-emerald-300 pb-20"
        id="infoOne"
      >
        <div className="customersFlexContainer h-full w-5/6 mx-auto p-5 flex flex-col lg:flex-row">
          <div className="imgContainer w-full lg:w-5/12 mx-auto grid place-items-center">
            <img
              className="image w-full my-12 mx-auto"
              src="./bear.webp"
              alt="satisfied customer"
            />
          </div>
          <div className="textContainer w-full lg:w-5/12 mx-auto md:mt-28 p-5">
            <h2 className="text-5xl mb-8">Our satisfied customers</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              illum excepturi quae obcaecati tenetur architecto optio recusandae
              molestias facilis, tempora quisquam quis suscipit adipisci sint.
              Corporis accusantium qui placeat cupiditate! Quam molestias
              inventore nulla ducimus.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              autem officiis commodi accusamus dicta minima suscipit eius amet
              quaerat veniam saepe eaque voluptas reprehenderit sed, vel
              asperiores assumenda, dignissimos velit consequatur recusandae
              omnis repellendus inventore nulla. Placeat, atque et! Quas veniam,
              maxime nostrum velit asperiores culpa facere molestias mollitia
              necessitatibus?
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              expedita reprehenderit exercitationem incidunt eligendi pariatur
              in corporis eius quidem magni.
            </p>
            <button className="border-none py-2 px-4 rounded-lg text-white bg-gray-800">
              Read More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
