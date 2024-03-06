import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginFetch } from "../../services/login/loginFetch";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setLoginData } from "../../redux/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });
  const setUserCredentials = (credentials) => {
    localStorage.setItem("accessToken", credentials.accessToken);
    localStorage.setItem("refreshToken", credentials.refreshToken);
  };

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      const tokens = await loginFetch(formData);
      setUserCredentials(tokens.data);
      const decodedToken = jwtDecode(tokens.data.accessToken);

      const user = {
        userId: decodedToken.nameid,
        name: decodedToken.name,
        email: decodedToken.email,
        role: decodedToken.role,
      };
      dispatch(setLoginData(user));
    } catch (error) {
      console.log(error);
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
