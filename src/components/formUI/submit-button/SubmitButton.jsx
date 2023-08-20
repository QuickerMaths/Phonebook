import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

const SubmitButton = ({ action, loading }) => {
  const { submitForm } = useFormikContext();

  return (
    <Button
      variant="contained"
      onClick={() => submitForm()}
      sx={{
        mt: 2,
        minWidth: 200,
        backgroundColor: "secondary.light",
        "&:hover": {
          backgroundColor: "secondary.main",
          opacity: [0.9, 0.8, 0.7],
          color: "secondary.contrastText",
        },
      }}
    >
      {loading ? "Loading..." : action}
    </Button>
  );
};

SubmitButton.propTypes = {
  action: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SubmitButton;
