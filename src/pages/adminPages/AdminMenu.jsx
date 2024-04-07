import React from "react";
import { Button, Container, TextField, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
const AdminMenu = () => {
  return (
    <Box>
      <Link to={"/createBrand"}>
        <Typography>Crear una nueva marca</Typography>
      </Link>
      <Link to={"/createCategory"}>
        <Typography>Crear una nueva categoría</Typography>
      </Link>
    </Box>
  );
};

export default AdminMenu;
