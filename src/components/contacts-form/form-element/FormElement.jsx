import React from "react";
import styles from "./FormElement.module.css";
import PropTypes from "prop-types";

const FormElement = ({ name, type, handleChange, errors }) => {
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
      />
      {errors.length > 0 && (
        <ul className={styles.errList}>
          {errors.map((err, i) => (
            <li key={i} className={styles.errMsg}>
              {err}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

FormElement.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
};

export default FormElement;
