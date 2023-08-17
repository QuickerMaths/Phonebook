import { createSlice } from "@reduxjs/toolkit";
import { signupUser } from "./operations";

const initialState = {
  currentUser: { name: null, email: null },
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  loading: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    resetError: (state, _) => {
      if (state.error) state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state, _) => {
      state.loading = true;
      state.status = "pending";
      if (state.error) state.error = null;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.status = "fulfilled";
        state.currentUser.name = action.payload.user.name;
        state.currentUser.email = action.payload.user.email;
        state.token = action.payload.token;
      }
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      if (state.loading) {
        state.status = "rejected";
        state.loading = false;
        state.error = action.payload;
      }
    });
  },
});

export const { resetError } = authSlice.actions;

export default authSlice.reducer;
