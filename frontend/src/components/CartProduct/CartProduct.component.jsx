import { useContext, useEffect } from "react";
import s from "./CartProduct.module.css";

const CartProduct = ({ item }) => {
  return (
    <div className={s.cartProduct}>
      <h3>cart Product {item.id}</h3>
    </div>
  );
};
export default CartProduct;
