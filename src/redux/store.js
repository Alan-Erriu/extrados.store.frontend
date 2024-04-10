import { configureStore } from "@reduxjs/toolkit";
import newPostSlice from "./post/createNewPostSlice";
import postDetailSlice from "./post/postDetailSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    newPostState: newPostSlice,
    postsDetailState: postDetailSlice,
    cartState: cartSlice,
  },
});
