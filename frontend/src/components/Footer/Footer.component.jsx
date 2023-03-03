import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mainContainer w-full bg-slate-900 text-white text-center p-8">
      <div className="footerGrid grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-8 pb-16">
        <div className="gridColumn text-left">
          <Link className="column-title text-xl text-slate-400" to={"/"}>
            Home
          </Link>
          <ul className="column-list flex flex-col items-start mt-6 list-none">
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam distinctio quod ut eligendi quia. Quod consectetur ut
              numquam suscipit quo!
            </li>
          </ul>
        </div>

        <div className="gridColumn text-left">
          <Link className="column-title text-xl text-slate-400" to={"/shop"}>
            Shop
          </Link>
          <ul className="column-list flex flex-col items-start mt-6 list-none">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              error incidunt neque molestias ratione maxime magni nobis
              mollitia.
            </li>
          </ul>
        </div>

        <div className="gridColumn text-left">
          <Link className="column-title text-xl text-slate-400" to={"/cart"}>
            Cart
          </Link>
          <ul className="column-list flex flex-col items-start mt-6 list-none">
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati iusto atque ea veritatis incidunt explicabo accusantium
              error.
            </li>
          </ul>
        </div>

        <div className="gridColumn text-left">
          <Link
            className="column-title text-xl text-slate-400"
            to={"/checkout"}
          >
            Checkout
          </Link>
          <ul className="column-list flex flex-col items-start mt-6 list-none">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              sunt!
            </li>
          </ul>
        </div>

        <div className="gridColumn text-left">
          <Link className="column-title text-xl text-slate-400" to={"Login"}>
            Login
          </Link>
          <ul className="column-list flex flex-col items-start mt-6 list-none">
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
