import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { userSignUpValidationSchema } from "../../validation/userSignUpValidation";
import { signupUser } from "../../redux/auth/operations";
import InputField from "../../components/formUI/input-field/InputField";
import SubmitButton from "../../components/formUI/submit-button/SubmitButton";
import GrowError from "../../components/formUI/grow-error/GrowError";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.authSlice);

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
        <Typography variant="h4">SingUp</Typography>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={userSignUpValidationSchema}
          onSubmit={async (values) => {
            await dispatch(
              signupUser({
                name: values.name,
                email: values.email,
                password: values.password,
              })
            ).then(() => navigate("/contacts"));
          }}
        >
          <Form>
            <InputField name="name" label="Name" />
            <InputField name="email" label="Email" />
            <InputField name="password" type="password" label="Password" />
            <InputField
              name="confirmPassword"
              type="password"
              label="Confirm password"
            />
            <SubmitButton action="SignUp" loading={loading} />
          </Form>
        </Formik>
      </Box>
    </Container>
  );
};

export default Register;
