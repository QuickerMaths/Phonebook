import * as yup from "yup";

export const userSignUpValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .min(2, "Name is Too Short.")
    .max(35, "Name is too long."),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is Required."),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .max(35, "Password is too long - should be 35 chars maximum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
});
