import { createSlice } from "@reduxjs/toolkit";
import { signupUser, loginUser, logoutUser, currentUser } from "./operations";

const handleReject = (state, action) => {
  if (state.loading) {
    state.loading = false;
    state.error = action.payload;
  }
};

const handlePending = (state) => {
  state.loading = true;
  if (state.error) state.error = null;
};

const handleFulfilled = (state, action) => {
  if (state.loading) {
    state.loading = false;

    action.payload.hasOwnProperty("user")
      ? (state.currentUser = action.payload.user)
      : (state.currentUser = action.payload);

    if (action.payload.hasOwnProperty("token")) {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    }
  }
};

const initialState = {
  currentUser: { name: null, email: null },
  token: localStorage.getItem("token") ?? null,
  loading: false,
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
    builder.addCase(signupUser.pending, (state, _) => handlePending(state));
    builder.addCase(signupUser.fulfilled, (state, action) =>
      handleFulfilled(state, action)
    );
    builder.addCase(signupUser.rejected, (state, action) =>
      handleReject(state, action)
    );

    builder.addCase(loginUser.pending, (state, _) => handlePending(state));
    builder.addCase(loginUser.fulfilled, (state, action) =>
      handleFulfilled(state, action)
    );
    builder.addCase(loginUser.rejected, (state, action) =>
      handleReject(state, action)
    );

    builder.addCase(logoutUser.pending, (state, _) => handlePending(state));
    builder.addCase(logoutUser.fulfilled, (state, _) => {
      if (state.loading) {
        state.loading = false;
        state.currentUser.name = null;
        state.currentUser.email = null;
        state.token = null;
      }
    });
    builder.addCase(logoutUser.rejected, (state, action) =>
      handleReject(state, action)
    );

    builder.addCase(currentUser.pending, (state, _) => handlePending(state));
    builder.addCase(currentUser.fulfilled, (state, action) =>
      handleFulfilled(state, action)
    );
    builder.addCase(currentUser.rejected, (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.payload;
        state.token = null;
        localStorage.removeItem("token");
      }
    });
  },
});

export const { resetError } = authSlice.actions;

export default authSlice.reducer;
