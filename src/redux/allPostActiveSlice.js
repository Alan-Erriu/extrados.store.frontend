import { createSlice } from "@reduxjs/toolkit";

const postActiveState = {
  id: null,
  name: "",
  userName: "",
  description: "",
  price: 0,
  offerDiscount: 0,
  priceNow: 0,
  img: "",
  offerName: "",
  offerDateExpiration: 0,
  offerStatus: false,
  categoryName: "",
  brandName: "",
};

export const postActiveSlice = createSlice({
  name: "postActive",
  postActiveState,
  reducers: {
    setPostActive: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setPostActive } = userSlice.actions;

export default postActiveSlice.reducer;
