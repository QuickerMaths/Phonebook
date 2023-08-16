import React, { useEffect } from "react";
import ContactsForm from "./components/contacts-form/ContactsForm";
import Filter from "./components/filter/Filter";
import ContactsList from "./components/contacts-list/ContactsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contacts/contactsSlice";

const App = () => {
  const dispatch = useDispatch();
  const { isLoadingGet } = useSelector((state) => state.contactsSlice);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <main className="App">
      <h1>Phone book</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoadingGet ? <h2>Loading...</h2> : <ContactsList />}
    </main>
  );
};

export default App;
