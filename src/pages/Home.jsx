import { Box, Grid } from "@mui/material";
import HomeOfferCard from "../components/homeItems/HomeOfferCard";
import CarouselBanners from "../components/homeItems/CarouselBanners";
import HomeCardCategorys from "../components/homeItems/HomeCardCategorys";
import Progress from "../components/feedBack/Progress";
import { useEffect, useState } from "react";
import { getPosts, setPostsActive } from "../redux/post/allPostActiveSlice";
import { getCategorys, setCategorys } from "../redux/categorySlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const categoryState = useSelector(getCategorys);
  const postState = useSelector(getPosts);

  useEffect(() => {
    if (!categoryState.categorys.length && !postState.posts.length) {
      dispatch(setCategorys());
      dispatch(setPostsActive());
    }
  }, []);

  if (
    categoryState.statusFetch === "loading" ||
    postState.statusFetch === "loading"
  ) {
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
      <CarouselBanners />
      <Box sx={{ mt: "50px", ml: "10%", mr: "10%" }}>
        <Grid container spacing={2}>
          {postState.posts &&
            postState.posts.map((post) => (
              <Grid key={post.post_id} item xs={3}>
                <HomeOfferCard post={post} />
              </Grid>
            ))}
        </Grid>
      </Box>
      <Box sx={{ mt: "150px", ml: "10%", mr: "10%", mb: "150px" }}>
        <Grid container spacing={2}>
          {categoryState.categorys &&
            categoryState.categorys.map((c) => (
              <Grid key={c.category_id} item xs={3}>
                <HomeCardCategorys category_name={c.category_name} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
