import { Button, Card, Typography } from "@mui/material";

export const PostDetailsAction = () => {
  return (
    <Card sx={{ height: "500px", width: 300, m: "10px", p: "15px" }}>
      <Typography>Zapatillas Para Hombre Nike Air Max Excee</Typography>
      <Typography>$ 149.999</Typography>
      <Button variant="contained">Agregar al carrito</Button>
    </Card>
  );
};
