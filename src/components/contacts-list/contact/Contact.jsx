import React from "react";
import styles from "./Contact.module.css";
import PropTypes from "prop-types";
import { useAppContext } from "../../../context/AppContext";

const Contact = ({ contact, onDeleteContact }) => {
  const { dispatch } = useAppContext();
  return (
    <li className={styles.contact}>
      <p>{contact.name}:</p>
      <p>{contact.number}</p>
      <button
        onClick={() =>
          dispatch({ type: "DELETE_CONTACT", payload: contact.id })
        }
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
