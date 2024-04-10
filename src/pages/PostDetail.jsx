import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ErrorNotification from "../components/feedBack/ErrorNotification";
import Progress from "../components/feedBack/Progress";
import SuccessNotification from "../components/feedBack/SuccessNotification";
import PostDetailDescription from "../components/postDetailsItems/PostDetailDescription";
import PostDetailImage from "../components/postDetailsItems/PostDetailImage";
import { PostDetailsAction } from "../components/postDetailsItems/PostDetailsAction";
import RelatedPosts from "../components/postDetailsItems/RelatedPosts";
import { resetCartErrorSate } from "../redux/cartSlice";
import { setPostDetail } from "../redux/post/postDetailSlice";
import { getAllPostActiveFetch } from "../services/post/getPostFetch";
const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postsDetailState.post);
  const [relatedPost, setRelatedPost] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const { statusFetch, errorMessage } = useSelector((state) => state.cartState);
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

  const resetStateError = () => {
    dispatch(resetCartErrorSate());
    return false;
  };

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
      {statusFetch === "fail" ? (
        <ErrorNotification
          handleClose={resetStateError}
          message={errorMessage}
        />
      ) : null}
      {statusFetch === "success" ? (
        <SuccessNotification
          handleClose={resetStateError}
          message={"producto agregado"}
        />
      ) : null}
    </Box>
  );
};

export default PostDetail;
