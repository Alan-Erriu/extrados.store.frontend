import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { addPostToOffer } from "../../services/offer/addPostToOffer";

export default function AddToOffersCard({
  props: {
    post,
    offers,
    setAddPostToOfferStatus,
    eventListenerAddToOffer,
    setEventListenerAddToOffer,
  },
}) {
  const { post_name, post_price, post_img, post_id } = post;
  const [offerSelectedData, setOfferSelectedData] = useState({});
  const [formData, setFormData] = useState({
    offer_post_postId: post_id,
    offer_post_offerId: "",
    offer_post_discount: "",
  });

  const handleInputChangeOffer = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    const selectedOffer = offers.find(
      (o) => o.offer_id === formData.offer_post_offerId
    );
    setOfferSelectedData(selectedOffer);
  }, [formData.offer_post_offerId]);

  const addPostToOfferFetch = async () => {
    try {
      await addPostToOffer(formData);
      setAddPostToOfferStatus({
        msg: "producto agregado a las ofertas",
        status: true,
      });
      setEventListenerAddToOffer(!eventListenerAddToOffer);
      console.log(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const hanhandleFormSubmit = (event) => {
    event.preventDefault();
    addPostToOfferFetch();
  };
  return (
    <Card
      sx={{
        width: "90%",
        height: 250,
        display: "flex",
        mt: "10px",
        mb: "10px",
      }}
    >
      <CardContent
        sx={{ display: "flex", flexGrow: 1, width: "200px", gap: 20 }}
      >
        <Box sx={{ display: "flex", width: "400px" }}>
          <CardMedia
            component="img"
            alt={post_name}
            height="200"
            image={post_img}
            width="50"
            sx={{ objectFit: "contain", flex: "1" }}
          />
          <Box>
            <Typography variant="body2" color="text.secondary">
              {post_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio alctual
            </Typography>
            <Typography color="green">$ {post_price}</Typography>
          </Box>
        </Box>
        <Box sx={{ width: "300px" }}>
          <form onSubmit={hanhandleFormSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Select
                name="offer_post_offerId"
                value={formData.offer_post_offerId}
                fullWidth
                required
                displayEmpty
                onChange={handleInputChangeOffer}
                variant="outlined"
                renderValue={(value) => {
                  const selectedOffer = offers.find(
                    (o) => o.offer_id === value
                  );
                  return selectedOffer
                    ? selectedOffer.offer_name
                    : "Seleccione una oferta";
                }}
              >
                <MenuItem disabled>Seleccione una Marca</MenuItem>
                {offers &&
                  offers.map((o) => (
                    <MenuItem key={o.offer_id} value={o.offer_id}>
                      {o.offer_name}
                    </MenuItem>
                  ))}
              </Select>
              <TextField
                label="Numero de descuento"
                name="offer_post_discount"
                type="number"
                value={formData.offer_post_discount}
                onChange={handleInputChangeOffer}
                fullWidth
                required
                inputProps={{ min: 1 }}
              />
              <Button
                color="primary"
                type="submit"
                variant="contained"
                fullWidth
              >
                Añadir a oferta
              </Button>
            </Box>
          </form>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "300px" }}>
          <Typography variant="body2" color="text.secondary">
            Nombre de la oferta:{" "}
            {offerSelectedData && offerSelectedData.offer_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fecha de inicio:{" "}
            {offerSelectedData &&
              new Date(offerSelectedData.offer_date_start).toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fecha de fin:{" "}
            {offerSelectedData &&
              new Date(
                offerSelectedData.offer_date_expiration
              ).toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio final:
            {post_price - (post_price * formData.offer_post_discount) / 100}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
