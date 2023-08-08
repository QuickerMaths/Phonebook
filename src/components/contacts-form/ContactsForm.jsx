import React, { useState } from "react";
import styles from "./ContactsForm.module.css";
import FormElement from "./form-element/FormElement";
import PropTypes from "prop-types";
import { contactValidation } from "../../validation/contactValidation";

const ContactsForm = ({ onAddContact }) => {
  const [contact, setContact] = useState({
    name: "",
    number: "",
  });

  const [errors, setErrors] = useState({
    name: [],
    number: [],
  });

  const handleChange = (e) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({
      name: [],
      number: [],
    });

    await contactValidation
      .validate(contact, { abortEarly: false })
      .then((res) => {
        onAddContact(res);
        setErrors({
          name: [],
          number: [],
        });
      })
      .catch((err) => {
        err.inner.forEach((e) => {
          setErrors((prev) => ({
            ...prev,
            [e.path]: [...prev[e.path], e.message],
          }));
        });
      });
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className={styles.form}>
        <FormElement
          name={"name"}
          type={"text"}
          handleChange={handleChange}
          errors={errors.name}
        />
        <FormElement
          name={"number"}
          type={"tel"}
          handleChange={handleChange}
          errors={errors.number}
        />
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
