import { Card } from "@mui/material";
import { useSelector } from "react-redux";

const PostDetailDescription = () => {
  const post = useSelector((state) => state.postsDetailState.post);

  return (
    <Card sx={{ height: "500px", width: "100%", backgroundColor: "white" }}>
      {post.post_description}
    </Card>
  );
};

export default PostDetailDescription;
