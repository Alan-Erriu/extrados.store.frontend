import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreatePostForm from "../components/createPostItems/CreatePostForm";
import ProductPreviewCard from "../components/createPostItems/ProductPreviewCard";
import ErrorNotification from "../components/feedBack/ErrorNotification";
import Progress from "../components/feedBack/Progress";
import { useCategoryAndBrandFetch } from "../hooks/useCategoryAndBrandFetch";
import { resetSate } from "../redux/post/createNewPostSlice";

export const CreatePost = () => {
  const { allCategorys, allBrands, categoryAndBrandloading, error } =
    useCategoryAndBrandFetch();
  const dispatch = useDispatch();
  const errorFetchForm = useSelector((state) => state.newPostState.statusFetch);
  const errorMessage = useSelector((state) => state.newPostState.errorMessage);
  const navigate = useNavigate();
  useEffect(() => {
    if (errorFetchForm && errorFetchForm === "success") {
      navigate("/");
      dispatch(resetSate());
    }
  }, [errorFetchForm]);

  const resetStatusError = () => {
    dispatch(resetSate());
    return false;
  };
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
  return (
    <Box>
      {error.status ? <ErrorNotification message={error.msg} /> : null}
      <Typography
        sx={{ mt: { xs: "3rem", md: "3rem" }, mb: "3rem" }}
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
        Crear publicación
      </Typography>
      {errorFetchForm && errorFetchForm === "fail" ? (
        <ErrorNotification
          message={errorMessage}
          handleClose={() => resetStatusError}
        />
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
