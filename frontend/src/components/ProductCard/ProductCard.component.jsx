import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

/** item shape = {
 * id: num,
 * title: string
 * price: num
 * description: string
 * category: string
 * image: string
 * rating: obj
 * quantity: num
 * } */

const Product = ({ item, data }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    let cartPlaceholder = cartItems;

    // find match
    const isMatch = cartPlaceholder.find((i) => i.id === item.id);
    if (isMatch) {
      cartPlaceholder.forEach((i) => {
        if (i.id === item.id) {
          i.quantity += 1;
        }
      });

      setCartItems(cartPlaceholder);
      // logs
      cartItems.forEach((i) => {
        console.log(i.title, i.quantity);
      });
      return;
    }

    // if no match
    cartPlaceholder.push({ ...item, quantity: (item.quantity += 1) });
    setCartItems(cartPlaceholder);
    // logs
    cartItems.forEach((i) => {
      console.log(i.title, i.quantity);
    });
  };

  return (
    <>
      <div className="border border-black rounded hover:scale-105 hover:shadow-md transition-all active:scale-100">
        <div className="mt-8 grid place-items-center">
          <img
            className="max-w-xs max-h-xs object-cover"
            src={item.image}
            alt={item.title}
          />
        </div>
        <div className="p-4">
          <h2>{item.title}</h2>
          <span>£{item.price}</span>
          <p>{item.description.split(" ").slice(0, 20).join(" ")}...</p>
          <button
            className="mt-4 py-2 px-4 border-none rounded-full text-black bg-blue-200 text-sm "
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default Product;
