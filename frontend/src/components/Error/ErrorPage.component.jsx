import s from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={s.errorContainer}>
      <div>
        <h1 className={s.errorTitle}>Something went wrong...</h1>
        <Link className={s.errorLink} to="/">
          Return home
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
