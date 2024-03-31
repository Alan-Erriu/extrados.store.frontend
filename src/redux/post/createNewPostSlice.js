import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewPostFetch } from "../../services/createNewPost/createNewPostFetch";
import { useNavigate } from "react-router-dom";

const newPostState = {
  post_name: "",
  post_description: "",
  post_price: null,
  post_stock: null,
  category_id: null,
  brand_id: null,
  post_img: "",
  statusFetch: "",
  errorMessage: "",
};
export const createNewPost = createAsyncThunk(
  "post/createPost",
  async (formDataNewPost, thunkApi) => {
    try {
      const response = await createNewPostFetch(formDataNewPost);
      return response.data;
    } catch (error) {
      if (
        error.response.data.errors.post_description[0] ==
        "La descripción debe tener entre 6 y 2000 carcteres"
      ) {
        throw thunkApi.rejectWithValue({
          error: {
            message: error.response.data.errors.post_description[0],
          },
        });
      } else {
        throw thunkApi.rejectWithValue({
          error: "error",
        });
      }
    }
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
        console.log(action.payload);

        state.statusFetch = "fail";
        state.errorMessage = action.payload.error.message;
      });
  },
});
export const getNewPost = (state) => state.newPostState;
export const { setNewPost, resetSate } = newPostSlice.actions;
export default newPostSlice.reducer;
