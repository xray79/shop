import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { LoginContext } from "../../contexts/LoginContext";
import { PROXY } from "../../utils/config";

const CheckoutModal = ({ isModalActive, setIsModalActive, total }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { loginToken } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleHideModal = () => {
    setIsModalActive(!isModalActive);
  };

  const handleSendData = () => {
    fetch(PROXY + "/pay", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginToken}`,
      },
      method: "POST",
      body: JSON.stringify(cartItems),
    })
      .then(res => {
        if (res.ok) res.json();
      })
      .then(json => {
        console.log(json);
        navigate("/success");
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black bg-opacity-75">
      <div className="max-w-2xl ml-auto h-screen p-12 bg-white overflow-scroll">
        <button
          className="border-none py-2 px-4 rounded-lg text-white bg-slate-600"
          onClick={handleHideModal}
        >
          Go back
        </button>
        <h1 className="mt-12 text-3xl">Checkout</h1>

        <form
          className="bg-white flex flex-col items-center justify-center py-4 px-8"
          action="POST"
        >
          <h2>Payment Details</h2>
          <input
            className="border-none rounded-lg m-4 w-3/4 py-4 px-8"
            type="text"
            placeholder="Card Number (Disabled for safety)"
            disabled
          />
        </form>
        <p className="text-3xl mt-8">Order Total: £{total}</p>
        <button
          className="border-none mt-8 py-2 px-4 rounded-lg bg-slate-200"
          onClick={handleSendData}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
export default CheckoutModal;
