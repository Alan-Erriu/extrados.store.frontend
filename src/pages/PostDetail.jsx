import { Box } from "@mui/material";
import PostDetailImage from "../components/postDetailsItems/PostDetailImage";
import { PostDetailsAction } from "../components/postDetailsItems/PostDetailsAction";
import PostDetailDescription from "../components/postDetailsItems/PostDetailDescription";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostByIdFetch } from "../services/post/postDetail";
import { useDispatch, useSelector } from "react-redux";
import { setPostDetail } from "../redux/post/postDetailSlice";
const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postsDetailState);

  useEffect(() => {
    dispatch(setPostDetail(id));
  }, []);

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
      {/* <Box sx={{ width: "100%", mt: 15 }}>
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
      </Box> */}
    </Box>
  );
};

export default PostDetail;
