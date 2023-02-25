import { useContext, useEffect, useState } from "react";
import Product from "../ProductCard/ProductCard.component";
import s from "./Shop.module.css";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
import { CartContext } from "../../contexts/CartContext";

const Shop = () => {
  // Initialise hooks
  const { loginToken } = useContext(LoginContext);
  const [data, setData] = useState();
  const navigate = useNavigate();

  // Make api call
  useEffect(() => {
    if (!data)
      fetch("./api/getAll", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loginToken}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setData(
            json.map((prod) => {
              return { ...prod, quantity: 0 }; // add quantity prop
            })
          );
        })
        .catch((err) => {
          console.error(err);
        });

    console.log(data);
  }, []);

  // Check if initial render, and redirect if not logged in
  const [isInitialRender, setIsInitialRender] = useState(true);
  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
    } else {
      if (!loginToken) navigate("/");
    }
  }, [loginToken]);

  return (
    <>
      <div className={s.productsContainer}>
        {data ? (
          data.map((item) => <Product key={item._id} item={item} data={data} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};
export default Shop;
