import axios from "axios";
import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const baseUrl = "https://connections-api.herokuapp.com/users/signup";

export const fetchContacts = createAsyncThunk(
  "contactsSlice/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get(`${baseUrl}/contacts`);
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Internal server error, please try again later."
      );
    }
  }
);

export const createContact = createAsyncThunk(
  "contactsSlice/createContact",
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post(`${baseUrl}/contacts`, {
        name: contact.name,
        number: contact.number,
        id: nanoid(),
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Internal server error, please try again later."
      );
    }
  },
  {
    condition: (contact, { getState }) => {
      const isContactExist = getState().contactsSlice.contacts.find(
        (item) => item.name === contact.name
      );

      if (isContactExist) {
        alert(`${contact.name} is already in contacts.`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  "contactsSlice/deleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${baseUrl}/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Internal server error, please try again later."
      );
    }
  }
);
