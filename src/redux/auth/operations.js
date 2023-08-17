import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://connections-api.herokuapp.com/users/signup";

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/users/signup`, credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("User with this email already exists");
    }
  }
);
