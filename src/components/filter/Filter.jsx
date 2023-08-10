import React from "react";
import styles from "./Filter.module.css";
import { useAppContext } from "../../context/AppContext";

const Filter = () => {
  const { dispatch } = useAppContext();
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        onChange={(e) =>
          dispatch({ type: "SET_FILTER", payload: e.target.value })
        }
      />
    </label>
  );
};

export default Filter;
