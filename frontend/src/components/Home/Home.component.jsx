import { useEffect, useState } from "react";
import Product from "../ProductCard/ProductCard.component";
import styles from "./Home.module.css";
import Navbar from "../Navbar/Navbar.component";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/api/getAll")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.productsContainer}>
        {data ? (
          data.map((item) => <Product key={item._id} item={item} />)
        ) : (
          <div className="">Loading...</div>
        )}
      </div>
    </>
  );
};
export default Home;
