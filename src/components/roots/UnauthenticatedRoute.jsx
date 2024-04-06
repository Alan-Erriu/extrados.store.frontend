import React from "react";
import ErrorNotFound from "../../pages/ErrorNotFound";
import { Navigate, Outlet } from "react-router-dom";

const UnauthenticatedRoute = () => {
  const validateUser = () => {
    const roleUser = localStorage.getItem("userRole");

    if (roleUser === "user" || roleUser === "admin") return false;
    return true;
  };

  return validateUser() ? <Outlet /> : <ErrorNotFound />;
};

export default UnauthenticatedRoute;
