import React, { useState } from "react";
import styles from "./ContactsForm.module.css";
import FormElement from "./form-element/FormElement";
import { useAppContext } from "../../context/AppContext";
import { contactValidation } from "../../validation/contactValidation";

const ContactsForm = () => {
  const {
    dispatch,
    state: { errors },
  } = useAppContext();

  const [contact, setContact] = useState({
    name: "",
    number: "",
  });

  const handleChange = (e) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_ERRORS" });

    await contactValidation
      .validate(contact, { abortEarly: false })
      .then((res) => {
        dispatch({ type: "ADD_CONTACT", payload: res });
        dispatch({ type: "CLEAR_ERRORS" });
      })
      .catch((err) => {
        err.inner.forEach((e) => {
          dispatch({ type: "SET_ERRORS", payload: e });
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

export default ContactsForm;
