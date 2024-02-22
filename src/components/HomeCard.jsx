import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function HomeCard({ name, price, img }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="green iguana" height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          En oferta
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <a href="#">{name}</a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Oferta ${price}
        </Typography>
      </CardContent>
    </Card>
  );
}
