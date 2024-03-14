import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewPostFetch } from "../services/createNewPost/createNewPostFetch";

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
    // await getTokensFetch();
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewPost.pending, (state, action) => {
        state.statusFetch = "loading";
        console.log("estoy en loading case");
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.statusFetch = "success";
        console.log("estoy en success case");
      })
      .addCase(createNewPost.rejected, (state, action) => {
        console.log("estoy en rejected case");
        console.error(action.error);
        state.statusFetch = "fail";
      });
  },
});
export const getNewPost = (state) => state.newPostState;
export const { setNewPost } = newPostSlice.actions;
export default newPostSlice.reducer;
