import React, { useEffect } from "react";
import ContactsForm from "./components/contacts-form/ContactsForm";
import Filter from "./components/filter/Filter";
import ContactsList from "./components/contacts-list/ContactsList";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contacts/contactsSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <main className="App">
      <h1>Phone book</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </main>
  );
};

export default App;
