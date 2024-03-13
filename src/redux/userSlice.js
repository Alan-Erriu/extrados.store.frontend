// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import { loginFetch } from "../services/login/loginFetch";

// const usersState = {
//   users: [],
// };

// export const fetchUser = createAsyncThunk("user/signIn", async (formData) => {
//   const tokens = await loginFetch(formData);
//   setUserCredentials(tokens.data);
//   const user = getClaims(tokens.data.accessToken);
//   return user;
// });

// export const userSlice = createSlice({
//   name: "user",
//   initialState: usersState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUser.pending, (state, action) => {
//         state.statusFetch = "loading";
//       })
//       .addCase(fetchUser.fulfilled, (state, action) => {
//         state.statusFetch = "success";
//         const { userId, name, email, role } = action.payload;
//         state.userId = userId;
//         state.name = name;
//         state.email = email;
//         state.role = role;
//       })
//       .addCase(fetchUser.rejected, (state, action) => {
//         console.log("estoy en rejected case");
//         state.statusFetch = "fail";
//       });
//   },
// });

// export const { setLoginData } = userSlice.actions;
// export default userSlice.reducer;
