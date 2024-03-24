import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function HomeCardCategorys({ category_name, category_img }) {
  const theme = useTheme();
  return (
    <Card sx={{ display: "flex", height: 150, width: 300 }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          justifyItems: "baseline",
          alignItems: "center",
          gap: 4,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 100,
            height: 100,
            objectFit: "contain",
          }}
          image={category_img}
          alt={category_name}
        />

        <Typography component="div" variant="h5">
          {category_name}
        </Typography>
      </CardContent>
    </Card>
  );
}
