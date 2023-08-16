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
      await axios.delete(
        `https://64dd1771e64a8525a0f798c3.mockapi.io/api/v1/contacts/${id}`
      );
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Internal server error, please try again later."
      );
    }
  }
);

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state, _) => {
      state.loading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.contacts = action.payload;
      }
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.payload;
      }
    });

    builder.addCase(createContact.pending, (state, _) => {
      state.loading = true;
    });
    builder.addCase(createContact.fulfilled, (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.contacts.push(action.payload);
      }
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.payload;
      }
    });

    builder.addCase(deleteContact.pending, (state, _) => {
      state.loading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      }
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.payload;
      }
    });
  },
});

export default contactsSlice.reducer;
