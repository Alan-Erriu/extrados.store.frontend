import { Box, MenuItem, Select } from "@mui/material";

const FiltersSearch = ({
  props: {
    brandsFiltered,
    categorysFiltered,
    setCategoryState,
    setBrandState,
    categoryState,
    brandState,
  },
}) => {
  const handleInputChangeCategory = (event) => {
    const newCategoryId = event.target.value;
    setCategoryState(newCategoryId);
  };

  const handleInputChangeBrand = (event) => {
    const newBrandId = event.target.value;
    setBrandState(newBrandId);
  };

  return (
    <Box>
      <Select
        fullWidth
        required
        variant="outlined"
        name="category_id"
        value={categoryState}
        displayEmpty
        onChange={handleInputChangeCategory}
        renderValue={(value) => {
          const selectedCategory = categorysFiltered.find(
            (category) => category.category_id === value
          );
          return selectedCategory
            ? selectedCategory.category_name
            : "Seleccione una categoría";
        }}
      >
        <MenuItem disabled>Seleccione una categoría</MenuItem>
        {categorysFiltered &&
          categorysFiltered.map((category) => (
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
        value={brandState}
        displayEmpty
        onChange={handleInputChangeBrand}
        renderValue={(value) => {
          const selectedBrand = brandsFiltered.find(
            (brand) => brand.brand_id === value
          );
          return selectedBrand
            ? selectedBrand.brand_name
            : "Seleccione una Marca";
        }}
      >
        <MenuItem disabled>Seleccione una Marca</MenuItem>
        {brandsFiltered &&
          brandsFiltered.map((brand) => (
            <MenuItem key={brand.brand_id} value={brand.brand_id}>
              {brand.brand_name}
            </MenuItem>
          ))}
      </Select>
    </Box>
  );
};

export default FiltersSearch;
