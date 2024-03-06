import { createSlice } from "@reduxjs/toolkit";

const userState = {
  userId: "",
  name: "",
  email: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    setLoginData: (state, action) => {
      const { userId, name, email, role } = action.payload;
      state.userId = userId;
      state.name = name;
      state.email = email;
      state.role = role;
    },
  },
});

export const { setLoginData } = userSlice.actions;
export default userSlice.reducer;
