import React from "react";
import { useDispatch } from "react-redux";
import { Grow, Alert, Button } from "@mui/material";
import { resetError } from "../../../redux/auth/authSlice";
import PropTypes from "prop-types";

const GrowError = ({ error }) => {
  const dispatch = useDispatch();

  return (
    <Grow
      in={error}
      style={{ transformOrigin: "0 0 0 0" }}
      {...(error ? { timeout: 1000 } : {})}
      unmountOnExit
    >
      <Alert
        sx={{
          width: "100%",
          mx: "auto",
          position: "absolute",
          top: "-80px",
        }}
        severity="error"
        variant="outlined"
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() => dispatch(resetError())}
          >
            CLOSE
          </Button>
        }
      >
        <strong>{error}</strong>
      </Alert>
    </Grow>
  );
};

GrowError.propTypes = {
  error: PropTypes.string.isRequired,
};

export default GrowError;
