import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import contactsReducer from "./contacts/contactsSlice";
import filterReducer from "./filter/filterSlice";

const store = configureStore({
  reducer: {
    contactsSlice: contactsReducer,
    filterSlice: filterReducer,
    authSlice: authReducer,
  },
});

export default store;
