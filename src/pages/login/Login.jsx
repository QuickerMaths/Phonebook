import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Alert, Button, Grow } from "@mui/material";
import { Form, Formik } from "formik";
import { userLoginValidationSchema } from "../../validation/userLoginValidation";
import { loginUser } from "../../redux/auth/operations";
import { resetError } from "../../redux/auth/authSlice";
import InputField from "../../components/formUI/input-field/InputField";
import SubmitButton from "../../components/formUI/submit-button/SubmitButton";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.authSlice);

  return (
    <Container minheight="90vh">
      <Box
        sx={{
          position: "relative",
          maxWidth: "500px",
          mx: "auto",
          mt: "100px",
          backgroundColor: "primary.main",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          borderRadius: "10px",
        }}
      >
        {error && (
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
        )}
        <Typography variant="h4">Login</Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={userLoginValidationSchema}
          onSubmit={async (values) => {
            dispatch(
              loginUser({
                email: values.email,
                password: values.password,
              })
            );
            if (status === "fulfilled") {
              navigate("/");
            }
          }}
        >
          <Form>
            <InputField name="email" label="Email" />
            <InputField name="password" type="password" label="Password" />
            <SubmitButton action="Login" />
          </Form>
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
