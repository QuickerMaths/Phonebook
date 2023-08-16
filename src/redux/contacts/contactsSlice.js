import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contactsSlice/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get(
        "https://64dd1771e64a8525a0f798c3.mockapi.io/api/v1/contacts"
      );
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createContact = createAsyncThunk(
  "contactsSlice/createContact",
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post(
        "https://64dd1771e64a8525a0f798c3.mockapi.io/api/v1/contacts",
        {
          name: contact.name,
          number: contact.number,
          id: nanoid(),
        }
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
      await axios.delete(
        `https://64dd1771e64a8525a0f798c3.mockapi.io/api/v1/contacts/${id}`
      );
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  contacts: [],
  isLoadingGet: false,
  isLoadingPost: false,
  isLoadingDelete: false,
};

const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state, _) => {
      state.isLoadingGet = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.isLoadingGet = false;
    });

    builder.addCase(createContact.pending, (state, _) => {
      state.isLoadingPost = true;
    });
    builder.addCase(createContact.fulfilled, (state, action) => {
      state.contacts.push(action.payload);
      state.isLoadingPost = false;
    });

    builder.addCase(deleteContact.pending, (state, _) => {
      state.isLoadingDelete = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      state.isLoadingDelete = false;
    });
  },
});

export default contactsSlice.reducer;
