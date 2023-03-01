import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel.component";

const Home = () => {
  return (
    <>
      <section className="bg-slate-50 h-screen w-full">
        <div className="h-full mx-auto p-20 flex">
          <div className="text-left inline-block mt-40 ml-40 mr-auto">
            <h1 className="text-6xl">Shop</h1>

            <p className="mb-8">Start Shopping today</p>
            <Link
              to={"/signup"}
              className="border-none py-2 px-4 rounded-lg bg-red-500"
            >
              Sign up now
            </Link>
          </div>
          <img
            className="w-1/2 object-contain"
            src="./web-shopping.svg"
            alt="web shopping "
          />
        </div>
      </section>

      <Carousel />

      <section
        className="min-h-screen w-full pb-20 bg-emerald-100"
        id="features"
      >
        <div className="max-w-3/4 mx-auto pt-40 ">
          <h2 className="text-4xl text-center">What We Offer</h2>

          <div className="mt-10 mx-auto grid grid-cols-3 place-items-center">
            <div className="bg-blue-900 text-white h-80 w-80 p-8 rounded-lg text-center flex flex-col justify-between">
              <h3 className="text-3xl">Price</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit quas, quod architecto cupiditate alias numquam
                voluptas! Unde eveniet culpa architecto.
              </p>
            </div>
            <div className="bg-blue-900 text-white h-80 w-80 p-8 rounded-lg text-center flex flex-col justify-between">
              <h3 className="text-3xl">Delivery</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit quas, quod architecto cupiditate alias numquam
                voluptas! Unde eveniet culpa architecto.
              </p>
            </div>
            <div className="bg-blue-900 text-white h-80 w-80 p-8 rounded-lg text-center flex flex-col justify-between">
              <h3 className="text-3xl">Convenience</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit quas, quod architecto cupiditate alias numquam
                voluptas! Unde eveniet culpa architecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-emerald-300" id="infoOne">
        <div className="h-full mx-auto p-5 flex">
          <div>
            <img
              className="w-96 my-12"
              src="./bear.jpg"
              alt="satisfied customer"
            />
          </div>
          <div className="mx-auto p-5">
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
