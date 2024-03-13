import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllBrandsFetch } from "../services/brand/brandFetch";

const brandState = {
  id: null,
  name: "",
  brands: [],
  statusFetch: "",
};
export const setBrands = createAsyncThunk("brand/getBrands", async () => {
  const response = await getAllBrandsFetch();
  return response;
});
export const brandSlice = createSlice({
  name: "brandState",
  initialState: brandState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setBrands.pending, (state, action) => {
        state.statusFetch = "loading";
      })
      .addCase(setBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.statusFetch = "success";
      })
      .addCase(setBrands.rejected, (state, action) => {
        console.error(action.error);
        state.statusFetch = "fail";
      });
  },
});

export const getbrands = (state) => state.brandState;

export default brandSlice.reducer;
