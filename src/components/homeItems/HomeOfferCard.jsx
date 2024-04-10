import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

export default function HomeOfferCard({ post }) {
  const { post_name, post_price, post_img, post_id, offer_status } = post;

  return (
    <Link
      to={`/post/${post_id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card sx={{ width: 375, height: 350 }}>
        <CardContent>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={post_img}
            sx={{ objectFit: "contain" }}
          />
          {offer_status ? (
            <Typography gutterBottom variant="h5" component="div">
              En oferta
            </Typography>
          ) : null}

          <Typography variant="body2" color="text.secondary">
            {post_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Oferta ${post_price}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
