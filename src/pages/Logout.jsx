import { Button, Container, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logout = () => {
  const userEmalil = localStorage.getItem("userEmail");

  const clearLocalStorage = () => {
    localStorage.clear();
  };
  return (
    <Container>
      <Typography
        sx={{ mt: { xs: "3rem", md: "8rem" }, mb: "4rem" }}
        textAlign={"center"}
        fontFamily={"fantasy"}
        variant="h3"
        color="#034a96"
        fontSize={{
          xs: "50px",
          sm: "50px",
          md: "50px",
          lg: "60px",
          xl: "70px",
        }}
      >
        Extrados Store
      </Typography>
      <form onSubmit={clearLocalStorage}>
        <Container
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Email"
            name="userEmalil"
            type="email"
            value={userEmalil}
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="user_password"
            type="password"
            value={"*********"}
            fullWidth
            required
          />
          <Button
            sx={{ backgroundColor: "#034a96" }}
            type="submit"
            variant="contained"
            fullWidth
          >
            Cerrar Sesión
          </Button>
          <p>
            ¿Quieres seguir buscando productos? Click <Link to="/">aqui</Link>
          </p>
        </Container>
      </form>
    </Container>
  );
};

export default Logout;
