import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

const Success = () => {
  const { setCartItems } = useContext(CartContext);
  useEffect(() => {
    setCartItems([]);
  }, []);

  return <div>Success</div>;
};
export default Success;
