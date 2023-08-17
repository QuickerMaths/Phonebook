import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, createContact, deleteContact } from "./operations";

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
    builder.addCase(createContact.rejected, (state, action) => {
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
    builder.addCase(deleteContact.rejected, (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.payload;
      }
    });
  },
});

export default contactsSlice.reducer;
