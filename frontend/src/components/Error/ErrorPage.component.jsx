import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <img src="./desk.webp" alt="" className="object-cover w-full h-64" />

      <div className="flex items-center justify-center flex-1">
        <div className="max-w-xl px-4 py-8 mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We can't find that page.
          </h1>

          <p className="mt-4 text-gray-500">
            Try searching again, or return home to start from the beginning.
          </p>

          <Link
            to={"/"}
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;

// <div className="bg-white h-screen grid place-items-center">
//   <div>
//     <h1 className="text-3xl mb-8">Something went wrong...</h1>
//     <Link className="bg-blue-200 py-2 px-4 rounded border-none" to="/">
//       Return home
//     </Link>
//   </div>
// </div>
