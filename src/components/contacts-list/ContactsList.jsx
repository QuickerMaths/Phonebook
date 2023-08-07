import React from "react";
import styles from "./ContactsList.module.css";
import Contact from "./contact/Contact";
import PropTypes from "prop-types";

const ContactsList = ({ contacts }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <Contact contact={contact} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
