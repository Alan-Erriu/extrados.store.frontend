import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function AddToOffersCard({ post }) {
  const { post_name, post_price, post_img, post_id } = post;
  return (
    <Card
      sx={{
        width: 800,
        height: 250,
        display: "flex",
        mt: "10px",
        mb: "10px",
      }}
    >
      <CardContent sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={post_img}
          sx={{ objectFit: "contain" }}
        />

        <Typography variant="body2" color="text.secondary">
          {post_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${post_price}
        </Typography>
      </CardContent>
    </Card>
  );
}
