import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostDetailDescription from "../components/postDetailsItems/PostDetailDescription";
import PostDetailImage from "../components/postDetailsItems/PostDetailImage";
import { PostDetailsAction } from "../components/postDetailsItems/PostDetailsAction";
import { setPostDetail } from "../redux/post/postDetailSlice";
import { getAllPostActiveFetch } from "../services/post/getPostFetch";
import RelatedPosts from "../components/postDetailsItems/RelatedPosts";
import Progress from "../components/feedBack/Progress";
const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postsDetailState.post);
  const [relatedPost, setRelatedPost] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      dispatch(setPostDetail(id));
      const responsePost = await getAllPostActiveFetch();
      setAllPost(responsePost);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  useEffect(() => {
    const filteredPosts = allPost.filter(
      (p) => p.category_name === post.category_name && p.post_id != post.post_id
    );
    const limitedPosts = filteredPosts.slice(0, 4);
    setRelatedPost(limitedPosts);
  }, [post, allPost]);

  if (loading) {
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
      <RelatedPosts relatedPost={relatedPost} />
    </Box>
  );
};

export default PostDetail;
