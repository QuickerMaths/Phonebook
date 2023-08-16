import React from "react";
import styles from "./Contact.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contacts/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.contact}>
      <p>{contact.name}:</p>
      <p>{contact.number}</p>
      <button
        onClick={() => dispatch(deleteContact(contact.id))}
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
};

export default Contact;
