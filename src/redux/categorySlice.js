import { createSlice } from "@reduxjs/toolkit";

const categoryState = {
  id: null,
  name: "",
};

export const categorySlice = createSlice({
  name: "category",
  categoryState,
  reducers: {
    setCategoryData: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setCategoryData } = categorySlice.actions;

export default categorySlice.reducer;
