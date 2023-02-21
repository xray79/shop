import s from "./Cart.module.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartProduct from "../CartProduct/CartProduct.component";

const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleClick = () => {
    setCartItems([]);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((i) => {
      total += i.quantity * i.price;
    });
    return total;
  };

  return (
    <section className={s.container}>
      <h1 className={s.title}>Shopping Cart</h1>
      <div className={s.cartContainer}>
        {cartItems.map((i) => (
          <CartProduct key={i._id} item={i} />
        ))}
      </div>
      <button className={s.clear} onClick={handleClick}>
        Clear Cart
      </button>
      <p className={s.total}>Total: £{calculateTotal()}</p>
    </section>
  );
};
export default ShoppingCart;
