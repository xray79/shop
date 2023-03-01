import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-white h-screen grid place-items-center">
      <div>
        <h1 className="text-3xl mb-8">Something went wrong...</h1>
        <Link className="bg-blue-200 py-2 px-4 rounded border-none" to="/">
          Return home
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
