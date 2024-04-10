import { Button, Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { addOneToCart, getMyCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

export const PostDetailsAction = () => {
  const post = useSelector((state) => state.postsDetailState.post);
  const dispatch = useDispatch();
  const addToCart = () => {
    const postData = {
      post_id: post.post_id,
      quantity: 1,
      name: post.post_name,
      price: post.post_price,
      img: post.post_img,
    };
    dispatch(addOneToCart(postData));
  };

  return (
    <Card sx={{ height: "500px", width: 400, m: "10px", p: "15px" }}>
      <Typography>{post.post_name}</Typography>
      <Typography>Precio: ${post.post_price}</Typography>
      <Typography>Marca: {post.brand_name}</Typography>
      <Button variant="contained" onClick={addToCart}>
        Agregar al carrito
      </Button>
    </Card>
  );
};
