import React, { useState } from "react";
import styles from "./ContactsForm.module.css";
import FormElement from "./form-element/FormElement";
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
        <FormElement name={"name"} type={"text"} handleChange={handleChange} />
        <FormElement name={"number"} type={"tel"} handleChange={handleChange} />
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
