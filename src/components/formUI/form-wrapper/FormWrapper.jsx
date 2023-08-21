import React from "react";
import { Form } from "formik";

const FormWrapper = ({ children }) => {
  return (
    <Form
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Form>
  );
};

export default FormWrapper;
