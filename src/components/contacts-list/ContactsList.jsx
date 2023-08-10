import React from "react";
import styles from "./ContactsList.module.css";
import Contact from "./contact/Contact";
import { useAppContext } from "../../context/AppContext";

const ContactsList = () => {
  const {
    state: { filter, contacts },
  } = useAppContext();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))
      ) : (
        <p>No contacts found...</p>
      )}
    </ul>
  );
};

export default ContactsList;
