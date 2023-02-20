import s from "./ProductCard.module.css";

const Product = ({ item }) => {
  /**
   * item shape:
   * {id: num,
   * title: string
   * price: num
   * description: string
   * category: string
   * image: string
   * rating: obj}
   */

  return (
    <div className={s.product}>
      <div className={s.imgContainer}>
        <img className={s.productImage} src={item.image} alt={item.title} />
      </div>
      <div className={s.textContainer}>
        <h2>{item.title}</h2>
        <span>£{item.price}</span>
        <p>{item.description.split(" ").slice(0, 20).join(" ")}...</p>
        <button className={s.link}>Add to Cart</button>
      </div>
    </div>
  );
};
export default Product;
