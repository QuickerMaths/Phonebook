import React from "react";
import styles from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filter/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
