import { CardMedia } from "@mui/material";
import { useSelector } from "react-redux";
const PostDetailImage = () => {
  const post = useSelector((state) => state.postsDetailState.post);
  return (
    <CardMedia
      component="img"
      sx={{ width: "100%", height: "500px", objectFit: "contain" }}
      image={post.post_img}
      alt="post"
    />
  );
};

export default PostDetailImage;
