import React from "react";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { setFilter } from "../../redux/filter/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <TextField
      sx={{ width: "50%" }}
      variant="outlined"
      label="Find contacts by name"
      onChange={(e) => dispatch(setFilter(e.target.value))}
      color="secondary"
    />
  );
};

export default Filter;
