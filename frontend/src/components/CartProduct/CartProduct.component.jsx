import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

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
    <div className="p-4 my-4 rounded-lg bg-emerald-200">
      <h3>Cart Product: {item.title}</h3>
      <p>£{item.price}</p>
      <div className="flex gap-2">
        <button
          className="px-2 border-none rounded-lg bg-white"
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          className="border-none py-1 px-2 rounded-lg w-16 text-center"
          type="number"
          value={productQuantity}
          onChange={handleValueChange}
        />
        <button
          className="px-2 border-none rounded-lg bg-white"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default CartProduct;
