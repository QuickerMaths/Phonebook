import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import { contactValidation } from "../../validation/contactValidation";
import { createContact } from "../../redux/contacts/operations";
import InputField from "../formUI/input-field/InputField";
import SubmitButton from "../formUI/submit-button/SubmitButton";

const ContactsForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contactsSlice);

  return (
    <Box
      sx={{
        width: "65%",
      }}
    >
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={contactValidation}
        onSubmit={async (values) => {
          await dispatch(
            createContact({
              name: values.name,
              number: values.number,
            })
          );
        }}
      >
        <Form>
          <InputField name="name" label="Name" />
          <InputField name="number" type="number" label="Number" />
          <SubmitButton action="Add Contact" loading={loading} />
        </Form>
      </Formik>
    </Box>
  );
};

export default ContactsForm;
