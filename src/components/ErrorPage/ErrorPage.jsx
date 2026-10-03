import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();

  const isNotFound = isRouteErrorResponse(error) && error.status === 404;
  const title = isNotFound ? "Page Not Found" : "Something Went Wrong";
  const message = isNotFound
    ? "The page you're looking for doesn't exist or may have been moved."
    : isRouteErrorResponse(error)
      ? error.statusText || error.data
      : error?.message ||
        "An unexpected error occurred. Please try again in a moment.";

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-primary to-secondary text-3xl text-primary-content shadow-lg">
        <FaExclamationTriangle />
      </span>

      <p className="mt-6 text-6xl font-black text-base-content/10">
        {isNotFound ? "404" : "Oops"}
      </p>
      <h1 className="mt-2 text-3xl font-extrabold">{title}</h1>
      <p className="mt-2 max-w-md text-sm text-base-content/60">{message}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link to="/" className="btn btn-primary gap-2 rounded-xl">
          <FaHome />
          Back to Home
        </Link>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="btn btn-ghost gap-2 rounded-xl"
        >
          <FaRedo />
          Reload
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
