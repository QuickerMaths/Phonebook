import React, { useState } from "react";
import { Typography, Box, IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Header = () => {
  const isUserLoggedIn = true;
  const userMail = "example@gmail.com";

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        p: 2,
        minHeight: "10vh",
        display: "flex",
        justifyContent: "space-between",
      }}
      component="header"
    >
      <Typography variant="h1" sx={{ fontSize: 36, color: "secondary.main" }}>
        PhoneBook
      </Typography>
      {isUserLoggedIn && (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>{userMail}</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      )}
    </Box>
  );
};

export default Header;
