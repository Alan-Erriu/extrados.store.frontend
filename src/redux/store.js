import { configureStore } from "@reduxjs/toolkit";
import newPostSlice from "./post/createNewPostSlice";
import categorySlice from "./categorySlice";
import brandSlice from "./brandSlice";
import postDetailSlice from "./post/postDetailSlice";

export const store = configureStore({
  reducer: {
    newPostState: newPostSlice,
    categoryState: categorySlice,
    brandState: brandSlice,
    postsDetailState: postDetailSlice,
  },
});
