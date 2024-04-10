import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerFetch } from "../../services/register/registerFetch";
import ErrorNotification from "../feedBack/ErrorNotification";
import { genericError } from "./errorMessages.js";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({ status: false, message: "" });
  const [formData, setFormData] = useState({
    user_name: "",
    user_lastname: "",
    user_email: "",
    user_phone_number: "",
    user_password_hash: "",
    user_date_of_birth: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await registerFetch(formData);
      navigate("/login");
    } catch (err) {
      console.log(err);
      if (err.response) {
        return setError(err.response.data);
      }
      setError(genericError);
    } finally {
      setTimeout(() => {
        setError({ status: false });
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
        sx={{ mt: { xs: "3rem", md: "3rem" }, mb: "4rem" }}
        textAlign={"center"}
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
            label="Nombre"
            name="user_name"
            type="text"
            value={formData.user_name}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Apellido"
            name="user_lastname"
            type="text"
            value={formData.user_lastname}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="user_email"
            type="email"
            value={formData.user_email}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Numero de celular"
            name="user_phone_number"
            type="tel"
            value={formData.user_phone_number}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="user_password_hash"
            type="password"
            value={formData.user_password_hash}
            onChange={handleInputChange}
            fullWidth
            required
          />

          <TextField
            label="Fecha de nacimiento"
            name="user_date_of_birth"
            type="date"
            value={formData.user_date_of_birth}
            onChange={handleInputChange}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button color="primary" type="submit" variant="contained" fullWidth>
            Registrarme
          </Button>
          <p>
            ¿Ya tienes una cuenta? inicia sesión
            <Link to="/login"> aqui</Link>
          </p>
        </Container>
      </form>
    </Container>
  );
};

export default RegisterForm;
