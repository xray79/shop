import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartProduct from "../CartProduct/CartProduct.component";
import CheckoutModal from "../CheckoutModal/CheckoutModal.component";

const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [isModalActive, setIsModalActive] = useState(false);
  const [total, setTotal] = useState(0);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    calculateTotal();
  }, [update]);

  const handleClear = () => {
    setCartItems([]);
  };

  const calculateTotal = () => {
    let t = 0;
    cartItems.forEach(i => {
      t += i.quantity * i.price;
    });
    setTotal(t);
  };

  const handleCheckout = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <section className="max-w-2xl min-h-screen pt-12 pb-8 mx-auto">
      {isModalActive ? (
        <CheckoutModal
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
          total={total}
        />
      ) : (
        ""
      )}
      <h1 className="text-4xl mb-8">Shopping Cart</h1>
      <div className="">
        {cartItems.map(i => (
          <CartProduct
            key={i._id}
            item={i}
            update={update}
            setUpdate={setUpdate}
          />
        ))}
      </div>
      <button
        className="border-none py-2 px-4 rounded-lg bg-amber-200"
        onClick={handleClear}
      >
        Clear Cart
      </button>
      <p className="text-4xl mt-12 mb-2">Total: £{total}</p>
      <button
        className="border-none py-2 px-4 rounded-lg bg-amber-400"
        onClick={handleCheckout}
      >
        Payment Details
      </button>
    </section>
  );
};
export default ShoppingCart;
