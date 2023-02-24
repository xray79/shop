import s from "./Cart.module.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartProduct from "../CartProduct/CartProduct.component";
import CheckoutModal from "../CheckoutModal/CheckoutModal.component";

const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [isModalActive, setIsModalActive] = useState(false);
  const [total, setTotal] = useState(0);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [update]);

  const handleClear = () => {
    setCartItems([]);
  };

  const calculateTotal = () => {
    let t = 0;
    cartItems.forEach((i) => {
      t += i.quantity * i.price;
    });
    setTotal(t);
  };

  const handleCheckout = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <section className={s.container}>
      {isModalActive ? (
        <CheckoutModal
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
        />
      ) : (
        ""
      )}
      <h1 className={s.title}>Shopping Cart</h1>
      <div className={s.cartContainer}>
        {cartItems.map((i) => (
          <CartProduct
            key={i._id}
            item={i}
            update={update}
            setUpdate={setUpdate}
          />
        ))}
      </div>
      <button className={s.btn} onClick={handleClear}>
        Clear Cart
      </button>
      <p className={s.total}>Total: £{total}</p>
      <button className={`${s.btn} ${s.checkout}`} onClick={handleCheckout}>
        Checkout
      </button>
    </section>
  );
};
export default ShoppingCart;
