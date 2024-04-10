import { Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const PostDetailDescription = () => {
  const post = useSelector((state) => state.postsDetailState.post);

  return (
    <Card
      sx={{
        height: "500px",
        width: "100%",
        backgroundColor: "white",
        p: "30px",
      }}
    >
      <Typography>{post.post_description}</Typography>
    </Card>
  );
};

export default PostDetailDescription;
