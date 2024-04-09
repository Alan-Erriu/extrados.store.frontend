import { configureStore } from "@reduxjs/toolkit";
import newPostSlice from "./post/createNewPostSlice";
import categorySlice from "./categorySlice";
import brandSlice from "./brandSlice";
import postDetailSlice from "./post/postDetailSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    newPostState: newPostSlice,
    categoryState: categorySlice,
    brandState: brandSlice,
    postsDetailState: postDetailSlice,
    cartState: cartSlice,
  },
});
