import { CardMedia } from "@mui/material";
import React from "react";
import imgagePath from "../../utilities/Data";
const PostDetailImage = () => {
  return (
    <CardMedia
      component="img"
      sx={{ width: "70%", height: "500px" }}
      image={imgagePath}
      alt="post"
    />
  );
};

export default PostDetailImage;
