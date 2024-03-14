import { Box } from "@mui/material";
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#ebebeb;",
      }}
    >
      <Nav />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
