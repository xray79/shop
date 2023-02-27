import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import s from "./Success.module.css";
import { Link } from "react-router-dom";

const Success = () => {
  const { setCartItems } = useContext(CartContext);
  useEffect(() => {
    setCartItems([]);
  }, []);

  return (
    <section className={s.container}>
      <div>
        <h1 className={s.title}>Thank you for your purchase!</h1>
        <Link className={`${s.btn} ${s.btnDark}`} to="/">
          Return home
        </Link>
      </div>
    </section>
  );
};
export default Success;
