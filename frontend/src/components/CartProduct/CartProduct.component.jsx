import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import s from "./CartProduct.module.css";

const CartProduct = ({ item }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div className={s.cartProduct}>
      {/* img */}
      <h3>Cart Product: {item.title}</h3>
      <p>£{item.price}</p>
      <p>{item.quantity}</p>
    </div>
  );
};
export default CartProduct;
