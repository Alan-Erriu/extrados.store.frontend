import { Button, Container, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterForm = () => {
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
      <form>
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
            name="email"
            type="email"
            //   value="asd"
            //   onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            //   value="asd"
            //   onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            //   value="asd"
            //   onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            //   value="asd"
            //   onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="email"
            type="email"
            //   value="asd"
            //   onChange={handleInputChange}
            fullWidth
            required
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
