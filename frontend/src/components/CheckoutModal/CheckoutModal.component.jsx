import s from "./CheckoutModal.module.css";

const CheckoutModal = ({ isModalActive, setIsModalActive }) => {
  const handleHideModal = () => {
    setIsModalActive(!isModalActive);
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
          <input className={s.input} type="text" placeholder="Card Number" />
          <input className={s.input} type="text" placeholder="Card Number" />
          <input className={s.input} type="text" placeholder="Card Number" />
          <input className={s.input} type="text" placeholder="Card Number" />
        </form>
      </div>
    </div>
  );
};
export default CheckoutModal;
