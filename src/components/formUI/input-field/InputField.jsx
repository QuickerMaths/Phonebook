import React from "react";
import { FormLabel, TextField } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

const InputField = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  const config = {
    ...field,
    ...props,
    placeholder: `Enter ${name}`,
    variant: "outlined",
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  return <TextField {...config} sx={{ mt: 4 }} color="secondary" />;
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InputField;
