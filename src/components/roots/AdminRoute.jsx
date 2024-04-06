import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const validateAdmin = () => {
    const roleAdmin = localStorage.getItem("userRole");

    if (roleAdmin === "admin") return true;
    return false;
  };

  return validateAdmin() ? <Outlet /> : <Navigate to={"login"} />;
};

export default AdminRoute;
