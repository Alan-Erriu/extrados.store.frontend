import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostByIdFetch } from "../../services/post/postDetail";

const postsDetailState = {
  post: {
    post_id: "",
    post_name: "",
    user_name: "",
    post_description: "",
    post_price: 0,
    offer_post_discount: null,
    priceNow: null,
    post_img: "",
    offer_name: "",
    offer_date_expiration: null,
    offer_status: false,
    category_name: "",
    brand_name: "",
  },
  statusFetch: "",
};
export const setPostDetail = createAsyncThunk(
  "post/getPostActive",
  async (id) => {
    const response = await getPostByIdFetch(id);
    return response;
  }
);
export const postDetailSlice = createSlice({
  name: "postDetailSlice",
  initialState: postsDetailState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setPostDetail.pending, (state, action) => {
        state.statusFetch = "loading";
      })
      .addCase(setPostDetail.fulfilled, (state, action) => {
        state.post = action.payload;
        state.statusFetch = "success";
      })
      .addCase(setPostDetail.rejected, (state, action) => {
        console.error(action.error);
        state.statusFetch = "fail";
      });
  },
});

export default postDetailSlice.reducer;
