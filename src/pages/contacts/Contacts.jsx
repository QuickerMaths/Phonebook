import React, { useEffect } from "react";
import { Box, Container, CircularProgress, Backdrop } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ContactsForm from "../../components/contacts-form/ContactsForm";
import Filter from "../../components/filter/Filter";
import ContactsList from "../../components/contacts-list/ContactsList";
import GrowError from "../../components/formUI/grow-error/GrowError";
import { fetchContacts } from "../../redux/contacts/operations";

const Contacts = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.contactsSlice);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <Container minheight="90vh">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
          gap: "20px",
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
        <ContactsForm />
        <Filter />
        <ContactsList />
      </Box>
    </Container>
  );
};

export default Contacts;
