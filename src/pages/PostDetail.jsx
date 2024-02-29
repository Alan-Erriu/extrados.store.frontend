import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PostDetailImage from "../components/postDetailsItems/PostDetailImage";
import { PostDetailsAction } from "../components/postDetailsItems/PostDetailsAction";
import PostDetailDescription from "../components/postDetailsItems/PostDetailDescription";
import HomeOfferCard from "../components/homeItems/HomeOfferCard";
import imgPath from "../utils/Data";
const PostDetail = () => {
  let p = {
    post_name: "zapatillas nike",
    post_price: "30000.99",
    post_img: imgPath,
  };
  return (
    <Box sx={{ width: "60%", ml: "20%", mr: "20%", mt: "50px" }}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "white",
        }}
      >
        <PostDetailImage />

        <PostDetailsAction />
      </Box>
      <Box sx={{ display: "flex", backgroundColor: "white", width: "100%" }}>
        <PostDetailDescription />
      </Box>
      <Box sx={{ width: "100%", mt: 15 }}>
        <Typography sx={{ mb: "10px" }}>Productos relacionados</Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <HomeOfferCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>
          <Grid item xs={3}>
            <HomeOfferCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>

          <Grid item xs={3}>
            <HomeOfferCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>
          <Grid item xs={3}>
            <HomeOfferCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PostDetail;
