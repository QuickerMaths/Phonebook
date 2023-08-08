import * as yup from "yup";

export const contactValidation = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(4, "Name is too short")
    .max(20, "Name is too long")
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required("Number is required")
    .min(8, "Number is too short")
    .max(12, "Number is too long")
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    ),
});
