import React, { useState } from "react";
import styles from "./FormElement.module.css";
import PropTypes from "prop-types";

const FormElement = ({ name, type, handleChange }) => {
  return (
    <div className={styles.formElem}>
      <label htmlFor={name} className={styles.label}>
        {name}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        onChange={handleChange}
        required
      />
    </div>
  );
};

FormElement.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormElement;
