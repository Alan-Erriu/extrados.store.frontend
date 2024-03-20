import { CardMedia } from "@mui/material";
import React from "react";
import imgagePath from "../../utilities/Data.utilities";
import { useSelector } from "react-redux";
const PostDetailImage = () => {
  const post = useSelector((state) => state.postsDetailState.post);
  return (
    <CardMedia
      component="img"
      sx={{ width: "70%", height: "500px" }}
      image={post.post_img}
      alt="post"
    />
  );
};

export default PostDetailImage;
