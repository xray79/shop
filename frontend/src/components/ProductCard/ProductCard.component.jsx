import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import s from "./ProductCard.module.css";

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
    <div className={s.product}>
      <div className={s.imgContainer}>
        <img className={s.productImage} src={item.image} alt={item.title} />
      </div>
      <div className={s.textContainer}>
        <h2>{item.title}</h2>
        <span>£{item.price}</span>
        <p>{item.description.split(" ").slice(0, 20).join(" ")}...</p>
        <button className={s.link} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
