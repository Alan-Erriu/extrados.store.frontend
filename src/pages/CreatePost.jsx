import { Box, Typography } from "@mui/material";
import CreatePostForm from "../components/createPostItems/CreatePostForm";
import ProductPreviewCard from "../components/createPostItems/ProductPreviewCard";
import ErrorNotification from "../components/feedBack/ErrorNotification";
import Progress from "../components/feedBack/Progress";
import { useCategoryAndBrandFetch } from "../hooks/useCategoryAndBrandFetch";
import { useSelector } from "react-redux";

export const CreatePost = () => {
  const { allCategorys, allBrands, categoryAndBrandloading, error } =
    useCategoryAndBrandFetch();

  const errorFetchForm = useSelector((state) => state.newPostState.statusFetch);
  if (categoryAndBrandloading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Progress />
      </Box>
    );
  }
  if (error.status) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <ErrorNotification message={error.msg} />
      </Box>
    );
  }
  return (
    <Box>
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
        Crear publicación
      </Typography>
      {errorFetchForm && errorFetchForm === "fail" ? (
        <ErrorNotification message={"intente mas tarde"} />
      ) : null}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <CreatePostForm allCategorys={allCategorys} allBrands={allBrands} />
        </Box>
        <Box sx={{ width: "50%" }}>
          <ProductPreviewCard />
        </Box>
      </Box>
    </Box>
  );
};
