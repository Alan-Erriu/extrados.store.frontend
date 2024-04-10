import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

export default function PostSearchCard({ post }) {
  const { post_name, post_price, post_img, post_id } = post;
  return (
    <Link
      to={`/post/${post_id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card sx={{ width: 375, height: 550 }}>
        <CardContent>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={post_img}
            sx={{ objectFit: "contain", mb: "40px" }}
          />
          <hr />
          <Typography gutterBottom variant="h5" component="div">
            {post_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            En oferta
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Oferta ${post_price}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
