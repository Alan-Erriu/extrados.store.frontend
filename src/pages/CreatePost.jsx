import { Box, Typography } from "@mui/material";
import CreatePostForm from "../components/createPostItems/CreatePostForm";
import ProductPreviewCard from "../components/createPostItems/ProductPreviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getCategorys, setCategorys } from "../redux/categorySlice";
import { getbrands, setBrands } from "../redux/brandSlice";
import Progress from "../components/feedBack/Progress";
import { useEffect } from "react";
import ErrorNotification from "../components/feedBack/ErrorNotification";

export const CreatePost = () => {
  const categorys = useSelector(getCategorys);
  const brands = useSelector(getbrands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategorys());
    dispatch(setBrands());
  }, []);
  if (categorys.statusFetch === "loading" || brands.statusFetch === "loading") {
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
  if (categorys.statusFetch === "fail" && brands.statusFetch === "fail") {
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
        <ErrorNotification message={"intente mas tarde"} />
      </Box>
    );
  }
  if (categorys.statusFetch === "success" && brands.statusFetch === "success")
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <CreatePostForm />
          </Box>
          <Box sx={{ width: "50%" }}>
            <ProductPreviewCard />
          </Box>
        </Box>
      </Box>
    );
};
