import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

const UserRoute = () => {
  const validateUser = () => {
    const roleUser = localStorage.getItem("userRole");

    if (roleUser === "user" || roleUser === "admin") return true;
    return false;
  };

  return validateUser() ? <Outlet /> : <Navigate to={"login"} />;
};

export default UserRoute;
