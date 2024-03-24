import { Button, Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const PostDetailsAction = () => {
  const post = useSelector((state) => state.postsDetailState.post);
  return (
    <Card sx={{ height: "500px", width: 400, m: "10px", p: "15px" }}>
      <Typography>{post.post_name}</Typography>
      <Typography>Precio: ${post.post_price}</Typography>
      <Typography>Marca: {post.brand_name}</Typography>
      <Button variant="contained">Agregar al carrito</Button>
    </Card>
  );
};
