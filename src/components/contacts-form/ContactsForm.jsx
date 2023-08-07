import React, { useState } from "react";
import styles from "./ContactsForm.module.css";
import PropTypes from "prop-types";

const ContactsForm = ({ onAddContact }) => {
  const [contact, setContact] = useState({
    name: "",
    number: "",
  });

  const handleChange = (e) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(contact);
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formElem}>
          <label htmlFor="name">Name</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formElem}>
          <label htmlFor="number">Number</label>
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    </section>
  );
};

ContactsForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactsForm;
