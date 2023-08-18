import React from "react";
import { useDispatch } from "react-redux";
import { Grow, Alert, Button } from "@mui/material";
import { resetError } from "../../../redux/auth/authSlice";
import PropTypes from "prop-types";

const GrowError = ({ error, sx = [] }) => {
  const dispatch = useDispatch();

  return (
    <Grow
      in={error}
      style={{ transformOrigin: "0 0 0 0" }}
      {...(error ? { timeout: 1000 } : {})}
      unmountOnExit
    >
      <Alert
        sx={[
          {
            width: "100%",
            mx: "auto",
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
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
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default GrowError;
