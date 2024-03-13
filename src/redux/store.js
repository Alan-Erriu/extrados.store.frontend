import { configureStore } from "@reduxjs/toolkit";
import newPostSlice from "./createNewPostSlice";
import categorySlice from "./categorySlice";
import brandSlice from "./brandSlice";
export const store = configureStore({
  reducer: {
    // user: userSlice,
    newPostState: newPostSlice,
    categoryState: categorySlice,
    brandState: brandSlice,
  },
});
