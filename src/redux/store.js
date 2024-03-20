import { configureStore } from "@reduxjs/toolkit";
import newPostSlice from "./post/createNewPostSlice";
import categorySlice from "./categorySlice";
import brandSlice from "./brandSlice";
import postActiveSlice from "./post/allPostActiveSlice";
import postDetailSlice from "./post/postDetailSlice";
export const store = configureStore({
  reducer: {
    // user: userSlice,
    newPostState: newPostSlice,
    categoryState: categorySlice,
    brandState: brandSlice,
    postsDetailState: postDetailSlice,
  },
});
