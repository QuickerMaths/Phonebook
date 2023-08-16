import { createSlice, nanoid } from "@reduxjs/toolkit";

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
});

export const { addContact, deleteContact, setContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
