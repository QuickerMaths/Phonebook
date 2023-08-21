import React from "react";
import { useSelector } from "react-redux";
import { List, Typography } from "@mui/material";
import Contact from "./contact/Contact";

const ContactsList = () => {
  const { contacts } = useSelector((state) => state.contactsSlice);
  const { filter } = useSelector((state) => state.filterSlice);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 300,
        maxHeight: 400,
        overflow: "auto",
      }}
    >
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))
      ) : (
        <Typography variant="body1">No contacts found...</Typography>
      )}
    </List>
  );
};

export default ContactsList;
