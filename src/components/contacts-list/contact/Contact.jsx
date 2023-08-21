import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemAvatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import PropTypes from "prop-types";

import { deleteContact } from "../../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contactsSlice);

  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton
          aria-label="delete"
          onClick={() => dispatch(deleteContact(contact.id))}
          disabled={loading}
        >
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <PersonIcon
          sx={{ backgroundColor: "secondary.main", borderRadius: "50%" }}
        />
      </ListItemAvatar>

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
