import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Unauthorized from "../components/Unauthorized/Unauthorized";

const RequireRole = ({ children, roles = [] }) => {
  const { user, role, loading, roleLoading } = useContext(AuthContext);
  const location = useLocation();

  if (loading || roleLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-[#FF3811]"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles.length > 0 && !roles.includes(role)) {
    return <Unauthorized requiredRoles={roles} currentRole={role} />;
  }

  return children;
};

export default RequireRole;
