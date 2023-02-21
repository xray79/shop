import s from "./Cart.module.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartProduct from "../CartProduct/CartProduct.component";

const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <section className={s.container}>
      <h1 className={s.title}>Shopping Cart</h1>
      <div className={s.cartContainer}>
        {heldItems.map((item) => {
          <CartProduct key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};
export default ShoppingCart;
