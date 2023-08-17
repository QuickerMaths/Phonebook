import { createSlice } from "@reduxjs/toolkit";
import { signupUser } from "./operations";

const initialState = {
  currentUser: { name: null, email: null },
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state, _) => {
      state.loading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.currentUser = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      }
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.payload;
      }
    });
  },
});

export default authSlice.reducer;
