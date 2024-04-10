import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/cartItems/CartCard";
import CartIsEmpty from "../components/cartItems/CartIsEmpty";
import Progress from "../components/feedBack/Progress";
import { getMyCart } from "../redux/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartState);

  useEffect(() => {
    dispatch(getMyCart());
  }, [cartState.event]);

  if (cartState.statusFetch === "loading") {
    return <Progress />;
  }
  if (cartState.cart.length < 1) {
    return <CartIsEmpty />;
  }
  const formattedCartTotal = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(cartState.total);
  return (
    <Box sx={{ marginTop: "5rem", minHeight: "47vh" }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 0, sm: 10, md: 2, lg: 4, xl: 3 }}
      >
        {cartState.cart &&
          cartState.cart?.map((p, i) => (
            <Grid key={i} item xs={12}>
              <Box
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  xs: "colunm",
                }}
              >
                <CartCard
                  img={p.img}
                  name={p.name}
                  quantity={p.quantity}
                  price={p.price}
                  id={p.post_id}
                />
              </Box>
            </Grid>
          ))}
      </Grid>
      <Typography>{formattedCartTotal}</Typography>
    </Box>
  );
};

export default Cart;
