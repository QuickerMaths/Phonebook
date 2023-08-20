import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ContactsForm from "../../components/contacts-form/ContactsForm";
import Filter from "../../components/filter/Filter";
import ContactsList from "../../components/contacts-list/ContactsList";
import GrowError from "../../components/formUI/grow-error/GrowError";
import { fetchContacts } from "../../redux/contacts/operations";

//TODO: refactor this component to use redux toolkit

const Contacts = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.contactsSlice);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <Container minheight="90vh">
      <Box
        sx={{
          position: "relative",
          maxWidth: "800px",
          mx: "auto",
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
        <Typography variant="h2">Contact book</Typography>
        <ContactsForm />

        <Typography variant="h3" sx={{ mt: 5 }}>
          Contacts
        </Typography>
        <Filter />
        <ContactsList />
      </Box>
    </Container>
  );
};

export default Contacts;
