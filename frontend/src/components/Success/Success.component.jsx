import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const Success = () => {
  const { setCartItems } = useContext(CartContext);
  useEffect(() => {
    setCartItems([]);
  }, []);

  return (
    <section className="h-screen w-full bg-white grid place-items-center text-center">
      <div>
        <h1 className="text-5xl mb-8">Thank you for your purchase!</h1>
        <Link
          className="border-none py-2 px-4 cursor-pointer rounded-lg bg-gray-700 text-white"
          to="/"
        >
          Return home
        </Link>
      </div>
    </section>
  );
};
export default Success;
