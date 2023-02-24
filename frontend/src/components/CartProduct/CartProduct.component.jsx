import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import s from "./CartProduct.module.css";

const CartProduct = ({ item, update, setUpdate }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(item.quantity);

  useEffect(() => {
    findAndUpdateCart();

    // trigger rerender in parent component
    setUpdate(!update);
  }, [productQuantity]);

  const findAndUpdateCart = () => {
    let cartPlaceholder = cartItems;
    const targetItem = cartPlaceholder.find((i) => i.id === item.id);
    if (targetItem) {
      cartItems.forEach((i) => {
        if (i.id === item.id) {
          i.quantity = productQuantity;
        }
      });
    }
    setCartItems(cartPlaceholder);
  };

  const handleIncrement = () => {
    let quantityPlaceholder = productQuantity;
    quantityPlaceholder += 1;
    setProductQuantity(+quantityPlaceholder);
  };

  const handleDecrement = () => {
    let quantityPlaceholder = productQuantity;
    quantityPlaceholder -= 1;
    setProductQuantity(+quantityPlaceholder);
  };

  const handleValueChange = (e) => {
    setProductQuantity(+e.target.value);
  };

  return (
    <div className={s.cartProduct}>
      <h3>Cart Product: {item.title}</h3>
      <p>£{item.price}</p>
      <div className={s.btnGroup}>
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          value={productQuantity}
          onChange={handleValueChange}
        />
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};
export default CartProduct;
