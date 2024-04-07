import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { createBrandFetch } from "../../services/createBrand/createBrandFetch";
const CreateBrandOrCategoryForm = ({
  setFormData,
  formData,
  setSuccess,
  setError,
  createBrandOrCategotyFetch,
}) => {
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await createBrandOrCategotyFetch(formData);
      setSuccess({ success: true, msg: "Marca creada con exito" });
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error);
        return setError({ error: true, msg: error.response.data });
      }
      setError({ error: true, msg: "algo salio mal, intente mas tarde" });
      console.log(error);
    }
  };
  return (
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
          name="BrandOrCategoryName"
          type="text"
          value={formData.BrandOrCategoryName}
          onChange={handleInputChange}
          fullWidth
          required
        />

        <TextField
          label="Ingrese una imagen"
          name="BrandOrCategoryImg"
          type="file"
          onChange={handleInputChange}
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button color="primary" type="submit" variant="contained" fullWidth>
          crear
        </Button>
      </Container>
    </form>
  );
};

export default CreateBrandOrCategoryForm;
