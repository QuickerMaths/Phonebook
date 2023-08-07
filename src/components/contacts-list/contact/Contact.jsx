import React from "react";
import styles from "./Contact.module.css";
import PropTypes from "prop-types";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.contact}>
      <p>{contact.name}:</p>
      <p>{contact.number}</p>
      <button
        onClick={() => onDeleteContact(contact.id)}
        className={styles.button}
      >
        Delete
      </button>
    </li>
  );
};

Contact.protoTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
