import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsSlice";
import contactMiddleware from "./contacts/contactsMiddleware";
import filterReducer from "./filter/filterSlice";

const store = configureStore({
  reducer: {
    contactsSlice: contactsReducer,
    filterSlice: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(contactMiddleware.middleware),
});

export default store;
