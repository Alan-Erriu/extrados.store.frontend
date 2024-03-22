import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ErrorNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h4>pagina no encontrada</h4>
      <Link to={"/"}>
        <Button
          sx={{ backgroundColor: "#034a96", marginTop: "300px" }}
          type="submit"
          variant="contained"
          fullWidth
        >
          volver a inicio
        </Button>
      </Link>
    </div>
  );
};

export default ErrorNotFound;
