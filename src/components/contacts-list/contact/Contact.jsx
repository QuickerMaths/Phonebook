import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

import { deleteContact } from "../../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton
          aria-label="delete"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      }
    >
      <ListItemText
        primary={`${contact.name} `}
        secondary={`${contact.number}`}
      />
    </ListItem>
  );
};

Contact.protoTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Contact;
