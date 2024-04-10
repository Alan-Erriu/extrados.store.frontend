import React from "react";
import { Outlet } from "react-router-dom";
import ErrorNotFound from "../../pages/ErrorNotFound";

const UnauthenticatedRoute = () => {
  const validateUser = () => {
    const roleUser = localStorage.getItem("userRole");

    if (roleUser === "user" || roleUser === "admin") return false;
    return true;
  };

  return validateUser() ? <Outlet /> : <ErrorNotFound />;
};

export default UnauthenticatedRoute;
