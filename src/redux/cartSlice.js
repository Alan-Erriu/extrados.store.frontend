import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMyCartFetch } from "../services/cart/getCartByUserId";
import { deleteOneFromCartFetch } from "../services/cart/deleteOneFromCartFetch";
import { addToCartfetch } from "../services/cart/addTocartFetch";

const cartState = {
  cart: [],
  statusFetch: "",
  errorMessage: "",
  event: false,
};

export const getMyCart = createAsyncThunk("cart/getMyCart", async () => {
  const response = await getMyCartFetch();
  return response.data;
});

export const deleteOnePostFromCart = createAsyncThunk(
  "cart/deleOneFromCart",
  async (postId) => {
    const response = await deleteOneFromCartFetch(postId);
    return response.data;
  }
);
export const addOneToCart = createAsyncThunk(
  "cart/addOneQuantityToCart",
  async (post, thunkApi) => {
    try {
      const data = {
        post_id: post.post_id,
        quantity: post.quantity,
      };
      const response = await addToCartfetch(data);

      return response.data;
    } catch (error) {
      if (error.message === "Network Error") {
        console.log(error);
        throw thunkApi.rejectWithValue({
          error: {
            message: "Servidor en mantenimiento, intente mas tarde",
          },
        });
      }
      throw thunkApi.rejectWithValue({
        error: {
          message: error.response.data,
        },
      });
    }
  }
);

export const cartSlice = createSlice({
  name: "cartState",
  initialState: cartState,
  reducers: {
    resetCartErrorSate: (state, action) => {
      state.statusFetch = "";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyCart.pending, (state, action) => {
        state.statusFetch = "loading";
      })
      .addCase(getMyCart.fulfilled, (state, action) => {
        state.statusFetch = "";
        state.cart = action.payload.post;
        state.total = action.payload.total;
      })
      .addCase(getMyCart.rejected, (state, action) => {
        console.error(action.error);
        state.statusFetch = "fail";
      })
      .addCase(deleteOnePostFromCart.pending, (state, action) => {
        state.statusFetch = "loading";
      })
      .addCase(deleteOnePostFromCart.fulfilled, (state, action) => {
        state.event = !state.event;
        state.statusFetch = "success";
      })
      .addCase(addOneToCart.pending, (state, action) => {
        state.statusFetch = "loading";
      })
      .addCase(addOneToCart.fulfilled, (state, action) => {
        state.event = !state.event;
        state.statusFetch = "succes";
      })
      .addCase(addOneToCart.rejected, (state, action) => {
        state.statusFetch = "fail";
        state.errorMessage = action.payload.error.message;
      });
  },
});
export const { resetCartErrorSate } = cartSlice.actions;
export default cartSlice.reducer;
