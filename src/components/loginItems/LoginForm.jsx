import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorNotification from "../feedBack/ErrorNotification";
import { loginFetch } from "../../services/login/loginFetch";
import { getClaims } from "./getClaims";
import { setLocalUserCredentials } from "./setLocalUserCredentials";
const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({ status: false, message: "" });
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const tokens = await loginFetch(formData);
      const userCrendentilas = getClaims(tokens.data);
      setLocalUserCredentials(userCrendentilas);
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError({
          status: true,
          message: "Contraseña incorrecta",
        });
      } else if (err.response && err.response.status === 404) {
        setError({
          status: true,
          message: "Email incorrecto",
        });
      } else {
        setError({
          status: true,
          message: "Intente más tarde",
        });
      }
      console.log(err);
    } finally {
      setTimeout(() => {
        setError({
          status: false,
          message: "",
        });
      }, 5000);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <Container>
      {error.status ? <ErrorNotification message={error.message} /> : null}
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
      <form onSubmit={handleFormSubmit}>
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
            name="user_email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="user_password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <Button
            sx={{ backgroundColor: "#034a96" }}
            type="submit"
            variant="contained"
            fullWidth
          >
            Iniciar sesión
          </Button>
          <p>
            ¿No tienes cuenta? registrate <Link to="/register">aqui</Link>
          </p>
        </Container>
      </form>
    </Container>
  );
};

export default LoginForm;
