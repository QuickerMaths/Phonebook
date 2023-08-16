import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsSlice";
import filterReducer from "./filter/filterSlice";

const store = configureStore({
  reducer: {
    contactsSlice: contactsReducer,
    filterSlice: filterReducer,
  },
});

export default store;
