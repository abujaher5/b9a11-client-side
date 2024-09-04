import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="text-5xl mt-20 text-center">This page is not found. </h2>
      <div className="mt-20">
        <Link className="btn btn-ghost text-4xl" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
