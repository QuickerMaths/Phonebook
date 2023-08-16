import React, { useState } from "react";
import styles from "./ContactsForm.module.css";
import FormElement from "./form-element/FormElement";
import { contactValidation } from "../../validation/contactValidation";
import { useDispatch } from "react-redux";
import { createContact } from "../../redux/contacts/contactsSlice";

const ContactsForm = () => {
  const dispatch = useDispatch();

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
    setErrors({ name: [], number: [] });

    await contactValidation
      .validate(contact, { abortEarly: false })
      .then((res) => {
        dispatch(createContact(res));
      })
      .catch((err) => {
        err.inner.forEach((e) => {
          setErrors((prev) => ({
            ...prev,
            [e.path]: [...prev[e.path], e.message],
          }));
        });
        console.log(err);
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

export default ContactsForm;
