import { Button, Container, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost, setNewPost } from "../../redux/post/createNewPostSlice";
import { getCategorys, setCategorys } from "../../redux/categorySlice";
import { getbrands, setBrands } from "../../redux/brandSlice";

const CreatePostForm = () => {
  const dispatch = useDispatch();
  const categorys = useSelector(getCategorys);
  const brands = useSelector(getbrands);
  const [formData, setFormData] = useState({
    post_name: "",
    post_description: "",
    post_price: 1,
    post_stock: 1,
    post_img: "",
    brand_id: "",
    category_id: "",
  });
  useEffect(() => {
    dispatch(setNewPost(formData));
  }, [formData, dispatch]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(createNewPost(formData));
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
          value={formData.post_name}
          onChange={handleInputChange}
          fullWidth
          required
        />

        <TextField
          label="Precio"
          name="post_price"
          type="number"
          value={formData.post_price}
          onChange={handleInputChange}
          fullWidth
          required
          inputProps={{ min: 1 }}
        />
        <TextField
          label="Stock disponible"
          name="post_stock"
          type="number"
          value={formData.post_stock}
          onChange={handleInputChange}
          fullWidth
          required
          inputProps={{ min: 1 }}
        />
        <Select
          fullWidth
          required
          variant="outlined"
          name="category_id"
          value={formData.category_id}
          displayEmpty
          onChange={handleInputChange}
          renderValue={(value) => {
            const selectedCategory = categorys.categorys.find(
              (category) => category.category_id === value
            );
            return selectedCategory
              ? selectedCategory.category_name
              : "Seleccione una categoría";
          }}
        >
          <MenuItem disabled>Seleccione una categoría</MenuItem>
          {categorys.categorys.map((category) => (
            <MenuItem key={category.category_id} value={category.category_id}>
              {category.category_name}
            </MenuItem>
          ))}
        </Select>
        <Select
          fullWidth
          required
          variant="outlined"
          name="brand_id"
          value={formData.brand_id}
          displayEmpty
          onChange={handleInputChange}
          renderValue={(value) => {
            const selectedBrand = brands.brands.find(
              (brand) => brand.brand_id === value
            );
            return selectedBrand
              ? selectedBrand.brand_name
              : "Seleccione una marca";
          }}
        >
          <MenuItem disabled>Seleccione una marca</MenuItem>
          {brands.brands.map((brand) => (
            <MenuItem key={brand.brand_id} value={brand.brand_id}>
              {brand.brand_name}
            </MenuItem>
          ))}
        </Select>

        <TextField
          label="Imagen de la publicación"
          name="post_img"
          type="file"
          onChange={handleInputChange}
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          multiline
          rows={4}
          size="medium"
          label="Descripción del producto"
          name="post_description"
          type="text"
          value={formData.post_description}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <Button color="primary" type="submit" variant="contained" fullWidth>
          Publicar producto
        </Button>
      </Container>
    </form>
  );
};

export default CreatePostForm;

{
  /* <Select
sx={{ width: "250px", backgroundColor: "white", color: "black" }}
variant="outlined"
displayEmpty
value={}
onChange={handleGroomerChange}
renderValue={(value) =>
  value ? getGroomerName(value) : "Seleccione una marca"
}
>
<MenuItem value="" disabled>
  Seleccione un peluquero
</MenuItem>
{allGroomersData.groomers.map((groomer) => (
  <MenuItem key={groomer._id} value={groomer._id}>
    {groomer.name}
  </MenuItem>
))}
</Select> */
}
