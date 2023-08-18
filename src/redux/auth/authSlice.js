import { createSlice } from "@reduxjs/toolkit";
import { signupUser, loginUser, logoutUser } from "./operations";

const handleReject = (state, action) => {
  if (state.loading) {
    state.status = "rejected";
    state.loading = false;
    state.error = action.payload;
  }
};

const handlePending = (state) => {
  state.loading = true;
  state.status = "pending";
  if (state.error) state.error = null;
};

const handleFulfilled = (state, action) => {
  if (state.loading) {
    state.loading = false;
    state.status = "fulfilled";
    state.currentUser.name = action.payload.user.name;
    state.currentUser.email = action.payload.user.email;
    state.token = action.payload.token;
  }
};

const initialState = {
  currentUser: { name: null, email: null },
  token: null,
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
        state.status = "fulfilled";
        state.currentUser.name = null;
        state.currentUser.email = null;
        state.token = null;
      }
    });
    builder.addCase(logoutUser.rejected, (state, action) =>
      handleReject(state, action)
    );
  },
});

export const { resetError } = authSlice.actions;

export default authSlice.reducer;
