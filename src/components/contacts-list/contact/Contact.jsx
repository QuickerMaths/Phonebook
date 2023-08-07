import React from "react";
import styles from "./Contact.module.css";
import PropTypes from "prop-types";

const Contact = ({ contact }) => {
  return (
    <li className={styles.contact}>
      <p>{contact.name}:</p>
      <p>{contact.number}</p>
    </li>
  );
};

Contact.protoTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Contact;
