import { useEffect, useState } from "react";
import Product from "../ProductCard/ProductCard.component";
import s from "./Shop.module.css";

const Shop = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/api/getAll")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div className={s.productsContainer}>
        {data ? (
          data.map((item) => <Product key={item._id} item={item} />)
        ) : (
          <div className="">Loading...</div>
        )}
      </div>
    </>
  );
};
export default Shop;
