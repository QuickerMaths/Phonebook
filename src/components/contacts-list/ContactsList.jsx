import React from "react";
import styles from "./ContactsList.module.css";
import Contact from "./contact/Contact";
import PropTypes from "prop-types";

const ContactsList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <Contact
            contact={contact}
            key={contact.id}
            onDeleteContact={onDeleteContact}
          />
        ))
      ) : (
        <p>No contacts found...</p>
      )}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
