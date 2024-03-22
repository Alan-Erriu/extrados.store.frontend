import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HomeOfferCard from "../components/homeItems/HomeOfferCard";
import PostDetailDescription from "../components/postDetailsItems/PostDetailDescription";
import PostDetailImage from "../components/postDetailsItems/PostDetailImage";
import { PostDetailsAction } from "../components/postDetailsItems/PostDetailsAction";
import { setPostDetail } from "../redux/post/postDetailSlice";
import { getAllPostActiveFetch } from "../services/post/getPostFetch";
const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postsDetailState.post);
  const [relatedPost, setRelatedPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setPostDetail(id));
        const responsePost = await getAllPostActiveFetch();
        const filteredPosts = responsePost.filter(
          (p) => p.category_name === post.category_name
        );
        const limitedPosts = filteredPosts.slice(0, 4);
        setRelatedPost(limitedPosts);

        console.log(post);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch, id]);

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
          {relatedPost &&
            relatedPost.map((post) => (
              <Grid key={post.post_id} item xs={3}>
                <HomeOfferCard post={post} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PostDetail;
