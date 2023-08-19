import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { userLoginValidationSchema } from "../../validation/userLoginValidation";
import { loginUser } from "../../redux/auth/operations";
import InputField from "../../components/formUI/input-field/InputField";
import SubmitButton from "../../components/formUI/submit-button/SubmitButton";
import GrowError from "../../components/formUI/grow-error/GrowError";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.authSlice);

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
          <GrowError
            error={error}
            sx={() => ({
              position: "absolute",
              top: "-80px",
            })}
          />
        )}
        <Typography variant="h4">Login</Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={userLoginValidationSchema}
          onSubmit={async (values) => {
            await dispatch(
              loginUser({
                email: values.email,
                password: values.password,
              })
            ).then(() => navigate("/contacts"));
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
