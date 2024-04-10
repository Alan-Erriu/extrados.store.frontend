import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

export const PostsIsEmpty = () => {
  return (
    <Box
      sx={{
        marginTop: "5rem",
        minHeight: "47vh",
        width: "100%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        xs: "colunm",
        flexDirection: "column",
      }}
    >
      <Typography align="center" gutterBottom variant="h4" color="black">
        No tienes productos o todos tus productos ya cuentan con una oferta
      </Typography>
      <Link to={"/createPost"} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            ":hover": {
              bgcolor: "primary.main",
            },
          }}
          variant="contained"
          color="success"
        >
          Publicar un nuevo producto
        </Button>
      </Link>
    </Box>
  );
};
