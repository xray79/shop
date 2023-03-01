import { useContext, useEffect, useState } from "react";
import Product from "../ProductCard/ProductCard.component";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
import { PROXY } from "../../utils/config";

const Shop = () => {
  // Initialise hooks
  const { loginToken } = useContext(LoginContext);
  const [data, setData] = useState();
  const navigate = useNavigate();

  // Make api call
  useEffect(() => {
    if (!data)
      fetch(PROXY + "/getAll", {
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
      <div className="grid grid-cols-2 p-8 max-w-2xl mx-auto gap-4">
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
