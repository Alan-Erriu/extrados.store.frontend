import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewPostFetch } from "../../services/createNewPost/createNewPostFetch";

const newPostState = {
  post_name: "",
  post_description: "",
  post_price: null,
  post_stock: null,
  category_id: null,
  brand_id: null,
  post_img: "",
  statusFetch: "",
};
export const createNewPost = createAsyncThunk(
  "post/createPost",
  async (formDataNewPost) => {
    const response = await createNewPostFetch(formDataNewPost);
    return response.data;
  }
);

export const newPostSlice = createSlice({
  name: "newPostState",
  initialState: newPostState,
  reducers: {
    setNewPost: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetSate: (state, payload) => {
      state.statusFetch = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewPost.pending, (state, action) => {
        state.statusFetch = "loading";
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.statusFetch = "success";
      })
      .addCase(createNewPost.rejected, (state, action) => {
        console.error(action.error);
        state.statusFetch = "fail";
      });
  },
});
export const getNewPost = (state) => state.newPostState;
export const { setNewPost, resetSate } = newPostSlice.actions;
export default newPostSlice.reducer;
