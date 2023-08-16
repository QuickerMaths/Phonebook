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

const initialState = {
  contacts: localStorage.getItem("contacts")
    ? JSON.parse(localStorage.getItem("contacts"))
    : [],
  errors: {
    name: false,
    number: false,
  },
};

const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    setContacts(state, action) {
      state.contacts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
      console.log(action.payload);
    });
  },
});

export const { addContact, deleteContact, setContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
