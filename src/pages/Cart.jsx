import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyCart } from "../redux/cartSlice";
import CartCard from "../components/cartItems/CartCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CartIsEmpty from "../components/cartItems/CartIsEmpty";
import Progress from "../components/feedBack/Progress";
const Cart = () => {
  const dispatch = useDispatch();
  const statusFetch = useSelector((state) => state.cartState.statusFetch);
  const cartPostsState = useSelector((state) => state.cartState.cart);
  useEffect(() => {
    dispatch(getMyCart());
  }, []);
  if (statusFetch === "loading") {
    return <Progress />;
  }
  if (cartPostsState.length < 1) {
    return <CartIsEmpty />;
  }
  return (
    <Box sx={{ marginTop: "5rem", minHeight: "47vh" }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 0, sm: 10, md: 2, lg: 4, xl: 3 }}
      >
        {cartPostsState &&
          cartPostsState?.map((p, i) => (
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
    </Box>
  );
};

export default Cart;
