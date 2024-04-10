import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

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
