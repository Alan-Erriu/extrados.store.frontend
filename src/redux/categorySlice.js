import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategorysFetch } from "../services/category/categoryFetch";

const categoryState = {
  id: null,
  name: "",
  categorys: [],
  statusFetch: "",
};
export const setCategorys = createAsyncThunk(
  "category/getcategorys",
  async () => {
    const response = await getAllCategorysFetch();
    return response;
  }
);
export const categorySlice = createSlice({
  name: "categoryState",
  initialState: categoryState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCategorys.pending, (state, action) => {
        state.statusFetch = "loading";
      })
      .addCase(setCategorys.fulfilled, (state, action) => {
        state.categorys = action.payload;
        state.statusFetch = "success";
      })
      .addCase(setCategorys.rejected, (state, action) => {
        console.error(action.error);
        state.statusFetch = "fail";
      });
  },
});

export const getCategorys = (state) => state.categoryState;

export default categorySlice.reducer;
