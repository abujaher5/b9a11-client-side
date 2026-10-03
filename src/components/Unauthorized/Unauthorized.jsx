import { Link } from "react-router-dom";
import { FaLock, FaArrowLeft } from "react-icons/fa";
import { ROLE_META } from "../../config/roles";

const Unauthorized = ({ requiredRoles = [], currentRole }) => {
  const required = requiredRoles
    .map((role) => ROLE_META[role]?.label || role)
    .join(" or ");

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-primary to-secondary text-3xl text-primary-content shadow-lg">
        <FaLock />
      </span>
      <h1 className="mt-6 text-3xl font-extrabold">Access Restricted</h1>
      <p className="mt-2 max-w-md text-sm text-base-content/60">
        This page is only available to <strong>{required}</strong>. You are
        signed in as{" "}
        <strong>{ROLE_META[currentRole]?.label || currentRole || "Guest"}</strong>
        .
      </p>
      <Link to="/" className="btn btn-primary mt-6 gap-2 rounded-xl">
        <FaArrowLeft />
        Back to Home
      </Link>
    </div>
  );
};

export default Unauthorized;
