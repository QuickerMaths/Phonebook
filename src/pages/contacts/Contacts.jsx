import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ContactsForm from "../../components/contacts-form/ContactsForm";
// import Filter from "../../components/filter/Filter";
// import ContactsList from "../../components/contacts-list/ContactsList";
// import { fetchContacts } from "../../redux/contacts/contactsSlice";

const Contacts = () => {
  // const dispatch = useDispatch();
  // const { loading, error } = useSelector((state) => state.contactsSlice);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, []);

  // let content;

  // if (loading) {
  //   content = <h2>Loading...</h2>;
  // } else if (error) {
  //   content = <h2>{error}</h2>;
  // } else {
  //   content = <ContactsList />;
  // }

  return (
    <main>
      <h1>Contact book</h1>
      {/* <ContactsForm />

      <h2>Contacts</h2>
      <Filter />
      {content} */}
    </main>
  );
};

export default Contacts;
