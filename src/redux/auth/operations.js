import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//TODO: move it to separate file

const baseUrl = "https://connections-api.herokuapp.com";

const setAuthorizationHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthorizationHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${baseUrl}/users/signup`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setAuthorizationHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${baseUrl}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setAuthorizationHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await axios.post(`${baseUrl}/users/logout`);

      clearAuthorizationHeader();
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "auth/currentUser",
  async (token, thunkAPI) => {
    try {
      setAuthorizationHeader(token);

      const response = await axios.get(`${baseUrl}/users/current`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
