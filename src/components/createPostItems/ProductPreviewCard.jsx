import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getNewPost } from "../../redux/createNewPostSlice";

const ProductPreviewCard = ({}) => {
  const post = useSelector(getNewPost);
  const { post_img, post_name, post_price, post_description } = post;
  return (
    <Card sx={{ width: 350, height: 600 }}>
      <CardMedia component="img" alt="post" height="300" image={post_img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio ${post_price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post_description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductPreviewCard;
