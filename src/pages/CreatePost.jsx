import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const CreatePost = () => {
  const [formData, setFormData] = useState({
    post_name: "",
    post_description: "",
    post_price: "",
    post_stock: "",
    post_img: "",
    brand_id: "",
    category_id: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === "file" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: e.target.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
        Crear publicación
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
            name="post_name"
            type="text"
            value={formData.user_name}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Descripción del producto"
            name="post_description"
            type="text"
            value={formData.user_lastname}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Precio"
            name="post_price"
            type="number"
            value={formData.user_email}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Stock disponible"
            name="post_stock"
            type="number"
            value={formData.user_phone_number}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Marca"
            name="brand_id"
            type="number"
            value={formData.user_password_hash}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Categoría"
            name="category_id"
            type="number"
            value={formData.user_password_hash}
            onChange={handleInputChange}
            fullWidth
            required
          />

          <TextField
            label="Imagen de la publicación"
            name="post_img"
            type="file"
            value={formData.user_date_of_birth}
            onChange={handleInputChange}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button color="primary" type="submit" variant="contained" fullWidth>
            Publicar producto
          </Button>
        </Container>
      </form>
    </Container>
  );
};
