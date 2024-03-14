import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPostActiveFetch } from "../../services/post/getPostFetch";

const postsActiveState = {
  posts: [],
  statusFetch: "",
};
export const setPostsActive = createAsyncThunk(
  "post/getPostActive",
  async () => {
    const response = await getAllPostActiveFetch();
    return response;
  }
);
export const postActiveSlice = createSlice({
  name: "postsActiveState",
  initialState: postsActiveState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setPostsActive.pending, (state, action) => {
        state.statusFetch = "loading";
      })
      .addCase(setPostsActive.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.statusFetch = "success";
      })
      .addCase(setPostsActive.rejected, (state, action) => {
        console.error(action.error);
        state.statusFetch = "fail";
      });
  },
});

export const getPosts = (state) => state.postsActiveState;

export default postActiveSlice.reducer;
