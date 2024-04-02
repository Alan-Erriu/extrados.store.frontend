import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ErrorNotification from "../components/feedBack/ErrorNotification";
import { Link, useNavigate } from "react-router-dom";
import { createOfferFetch } from "../services/offer/createOfferFetch";

const CreateOffer = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({ errorStatus: false, msg: "" });
  const [formData, setFormData] = useState({
    offer_name: "",
    offer_date_start: "",
    offer_date_expiration: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await createOfferFetch(formData);
      navigate("/addPostToOffers");
    } catch (err) {
      if (
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors.offer_date_expiration &&
        err.response.data.errors.offer_date_expiration[0]
      ) {
        console.log(err);
        return setError({
          errorStatus: true,
          msg: err.response.data.errors.offer_date_expiration[0],
        });
      }
      if (
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors.offer_date_start &&
        err.response.data.errors.offer_date_start[0]
      ) {
        console.log(err);
        return setError({
          errorStatus: true,
          msg: err.response.data.errors.offer_date_start[0],
        });
      }
      setError({
        errorStatus: true,
        msg: "error inesperado",
      });
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
      {error.errorStatus == true ? (
        <ErrorNotification
          message={error.msg}
          handleClose={() => setError({ errorStatus: false, msg: "" })}
        />
      ) : null}
      <Typography
        sx={{ mt: { xs: "3rem", md: "3rem" }, mb: "4rem" }}
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
        Crear un grupo de ofertas
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
            label="Nombre de la oferta"
            name="offer_name"
            type="text"
            value={formData.offer_name}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Fecha de inicio de la oferta"
            name="offer_date_start"
            type="datetime-local"
            value={formData.offer_date_start}
            onChange={handleInputChange}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="Fecha de fin de la oferta"
            name="offer_date_expiration"
            type="datetime-local"
            value={formData.offer_date_expiration}
            onChange={handleInputChange}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button color="primary" type="submit" variant="contained" fullWidth>
            Crear nuevo grupo de ofertas
          </Button>
        </Container>
      </form>
    </Container>
  );
};

export default CreateOffer;
