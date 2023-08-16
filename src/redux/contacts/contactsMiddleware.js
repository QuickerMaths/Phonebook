import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addContact, deleteContact, setContacts } from "./contactsSlice";

const contactMiddleware = createListenerMiddleware();

contactMiddleware.startListening({
  actionCreator: addContact,
  effect: (action, listenerApi) => {
    const isContactExist = listenerApi
      .getOriginalState()
      .contactsSlice.contacts.some(
        (item) => item.name.toLowerCase() === action.payload.name.toLowerCase()
      );

    if (isContactExist) {
      alert(`${action.payload.name} is already in contacts`);
      listenerApi.dispatch(
        setContacts(listenerApi.getOriginalState().contactsSlice.contacts)
      );
    }

    localStorage.setItem(
      "contacts",
      JSON.stringify(listenerApi.getState().contactsSlice.contacts)
    );
  },
});

contactMiddleware.startListening({
  actionCreator: deleteContact,
  effect: (_, listenerApi) => {
    localStorage.setItem(
      "contacts",
      JSON.stringify(listenerApi.getState().contactsSlice.contacts)
    );
  },
});

export default contactMiddleware;
