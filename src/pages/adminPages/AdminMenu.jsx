import React from "react";
import { Button, Container, TextField, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
const AdminMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        mt: "20px",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", gap: 5 }}>
        <Box>
          <Link to={"/createBrand"}>
            <Typography>Crear una nueva marca</Typography>
          </Link>
        </Box>
        <Box>
          <Link to={"/createCategory"}>
            <Typography>Crear una nueva categoría</Typography>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          mt: "90px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography>Bievenido al menu para administradores</Typography>
      </Box>
    </Box>
  );
};

export default AdminMenu;
