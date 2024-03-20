// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getAllPostActiveFetch } from "../../services/post/getPostFetch";

// const postsActiveState = {
//   post: {
//     post_id: "",
//     post_name: "",
//     user_name: "",
//     post_description: "",
//     post_price: 0,
//     offer_post_discount: null,
//     priceNow: null,
//     post_img: "",
//     offer_name: "",
//     offer_date_expiration: null,
//     offer_status: false,
//     category_name: "",
//     brand_name: "",
//   },
//   posts: [],
//   statusFetch: "",
// };
// export const setPostsActive = createAsyncThunk(
//   "post/getPostActive",
//   async () => {
//     const response = await getAllPostActiveFetch();
//     return response;
//   }
// );
// export const postActiveSlice = createSlice({
//   name: "postsActiveState",
//   initialState: postsActiveState,
//   reducers: {
//     setPostById: (state, action) => {
//       state.post = action.payload;
//     },
//     addPostToPosts: (state, action) => {
//       console.log("el status fue 200");
//       return {
//         ...state,
//         posts: [...state.posts, action.payload],
//       };
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(setPostsActive.pending, (state, action) => {
//         state.statusFetch = "loading";
//       })
//       .addCase(setPostsActive.fulfilled, (state, action) => {
//         state.posts = action.payload;
//         state.statusFetch = "success";
//       })
//       .addCase(setPostsActive.rejected, (state, action) => {
//         console.error(action.error);
//         state.statusFetch = "fail";
//       });
//   },
// });

// export const getPosts = (state) => state.postsActiveState;
// export const { setPostById, addPostToPosts } = postActiveSlice.actions;

// export default postActiveSlice.reducer;
