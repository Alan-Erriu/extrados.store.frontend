import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMyCartFetch } from "../services/cart/getCartByUserId";
import { deleteOneFromCartFetch } from "../services/cart/deleteOneFromCartFetch";
import { addToCartfetch } from "../services/cart/addTocartFetch";

const cartState = {
  cart: [],
  statusFetch: "",
};
//traer el carrito del usuario por id, el id esta en el token
export const getMyCart = createAsyncThunk("cart/getMyCart", async () => {
  const response = await getMyCartFetch();
  return response.data;
});
//disminuir en 1 la cantidad del carrito, si llega a 0 se borra
export const deleteOnePostFromCart = createAsyncThunk(
  "cart/deleOneFromCart",
  async (postId) => {
    const response = await deleteOneFromCartFetch(postId);
    return response.data;
  }
);
export const addOneToCart = createAsyncThunk(
  "cart/addOneQuantityToCart",
  async (data) => {
    console.log(data);
    const response = await addToCartfetch(data);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cartState",
  initialState: cartState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyCart.pending, (state, action) => {
        state.statusFetch = "loading";
      })
      .addCase(getMyCart.fulfilled, (state, action) => {
        state.statusFetch = "success";
        state.cart = action.payload.post;
        state.total = action.payload.total;
      })
      .addCase(getMyCart.rejected, (state, action) => {
        console.error(action.error);
        state.statusFetch = "fail";
      })
      .addCase(deleteOnePostFromCart.fulfilled, (state, action) => {
        const postId = action.meta.arg;
        const itemToDelete = state.cart.find((item) => item.post_id === postId);
        if (itemToDelete.quantity > 1) {
          state.cart = state.cart.map((item) =>
            item.post_id === postId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          state.cart = state.cart.filter((item) => item.post_id !== postId);
        }
      })
      .addCase(addOneToCart.fulfilled, (state, action) => {
        const { post_id } = action.meta.arg;
        const updatedCart = state.cart.map((item) =>
          item.post_id === post_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        state.cart = updatedCart;
      });
  },
});

export default cartSlice.reducer;
