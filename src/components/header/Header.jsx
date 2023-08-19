import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { logoutUser } from "../../redux/auth/operations";
import GrowError from "../formUI/grow-error/GrowError";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    currentUser: { email },
    token,
    error,
  } = useSelector((state) => state.authSlice);

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
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "primary.main",
        position: "relative",
        mb: 20,
      }}
      component="header"
    >
      {error && (
        <GrowError
          error={error}
          sx={() => ({
            position: "absolute",
            bottom: "-80px",
          })}
        />
      )}
      <Link to={token ? "/contacts" : "/"} style={{ textDecoration: "none" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: 36,
            color: "secondary.main",
            fontWeight: "bold",
          }}
        >
          PhoneBook
        </Typography>
      </Link>
      {token && (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle sx={{ color: "secondary.main" }} />
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
            <MenuItem onClick={handleClose}>{email}</MenuItem>
            <MenuItem onClick={handleClose}>
              <Button
                onClick={() => {
                  dispatch(logoutUser());
                }}
              >
                LogOut
              </Button>
            </MenuItem>
          </Menu>
        </div>
      )}
    </Box>
  );
};

export default Header;
