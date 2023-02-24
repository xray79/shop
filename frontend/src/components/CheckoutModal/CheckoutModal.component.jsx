import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { LoginContext } from "../../contexts/LoginContext";
import s from "./CheckoutModal.module.css";

const CheckoutModal = ({ isModalActive, setIsModalActive, total }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { loginToken } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleHideModal = () => {
    setIsModalActive(!isModalActive);
  };

  const handleSendData = () => {
    fetch("http://localhost:4000/api/pay", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginToken}`,
      },
      method: "POST",
    })
      .then((res) => {
        if (res.ok) navigate("/success");
      })
      .then((json) => {
        console.log(json);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={s.overlay}>
      <div className={s.mainSection}>
        <button className={`${s.btn} ${s.btnDark}`} onClick={handleHideModal}>
          Go back
        </button>
        <h1 className={s.title}>Checkout</h1>

        <form className={`${s.formGroup}`} action="POST">
          <h2>Payment Details</h2>
          <input
            className={s.input}
            type="text"
            placeholder="Card Number (Disabled for safety)"
            disabled
          />
        </form>
        <p className={s.total}>Order Total: £{total}</p>
        <button className={`${s.btn} ${s.btnLight}`} onClick={handleSendData}>
          Checkout
        </button>
      </div>
    </div>
  );
};
export default CheckoutModal;
