import { useContext, useEffect, useState } from "react";
import Product from "../ProductCard/ProductCard.component";
import { AppContext } from "../../App";
import s from "./Shop.module.css";

const Shop = () => {
  const { appToken, setAppToken } = useContext(AppContext);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/api/getAll", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${appToken}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.error(err);
      });
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
