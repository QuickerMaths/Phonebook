import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Formik } from "formik";
import { userLoginValidationSchema } from "../../validation/userLoginValidation";
import { loginUser } from "../../redux/auth/operations";
import FormWrapper from "../../components/formUI/form-wrapper/FormWrapper";
import InputField from "../../components/formUI/input-field/InputField";
import SubmitButton from "../../components/formUI/submit-button/SubmitButton";
import GrowError from "../../components/formUI/grow-error/GrowError";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

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
        <Button sx={{ position: "absolute", top: "15px", left: "10px" }}>
          <Link to={state ? state.from : "/"}>
            <ArrowBackIcon sx={{ color: "secondary.main", fontSize: 30 }} />
          </Link>
        </Button>
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
            ).then((res) => {
              if (!res.hasOwnProperty("error")) navigate("/contacts");
            });
          }}
        >
          <FormWrapper>
            <InputField name="email" label="Email" />
            <InputField name="password" type="password" label="Password" />
            <SubmitButton action="Login" loading={loading} />

            <Typography
              variant="body1"
              sx={{ mt: 2, display: "flex", alignItems: "center" }}
            >
              Don't have an account?
              <Link to="/register">
                <Button
                  sx={{
                    color: "secondary.main",
                    "&:hover": {
                      color: "secondary.contrastText",
                    },
                  }}
                >
                  Register
                </Button>
              </Link>
            </Typography>
          </FormWrapper>
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
