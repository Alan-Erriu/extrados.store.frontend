import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BrandOrCategoryPreview from "../../components/createBrandAndCategoryItems/BrandOrCategoryPreview";
import CreateBrandOrCategoryForm from "../../components/createBrandAndCategoryItems/CreateBrandOrCategoryForm";
import ErrorNotification from "../../components/feedBack/ErrorNotification";
import SuccessNotification from "../../components/feedBack/SuccessNotification";
import { createCategoryFetch } from "../../services/createCategory/createCategoryFetch";

const CreateCategory = () => {
  const [formData, setFormData] = useState({
    BrandOrCategoryName: "",
    BrandOrCategoryImg: "",
  });
  const [success, setSuccess] = useState({
    success: false,
    msg: "",
  });
  const [error, setError] = useState({
    error: false,
    msg: "",
  });

  const resetStatusSucces = () => {
    setSuccess({ success: false, msg: "" });
    return false;
  };
  const resetStatusError = () => {
    setError({
      error: false,
      msg: "",
    });
    return false;
  };
  return (
    <Box>
      {error.error ? (
        <ErrorNotification handleClose={resetStatusError} message={error.msg} />
      ) : null}

      {success.success ? (
        <SuccessNotification
          handleClose={resetStatusSucces}
          message={success.msg}
        />
      ) : null}

      <Typography
        sx={{ mt: { xs: "3rem", md: "3rem" }, mb: "3rem" }}
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
        Crear categoría
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <CreateBrandOrCategoryForm
            setFormData={setFormData}
            formData={formData}
            setError={setError}
            setSuccess={setSuccess}
            createBrandOrCategotyFetch={createCategoryFetch}
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <BrandOrCategoryPreview categoryOrBrand={formData} />
        </Box>
      </Box>
    </Box>
  );
};

export default CreateCategory;
