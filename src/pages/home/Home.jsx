import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Welcome to PhoneBook
      </Typography>
      <Typography variant="body1" sx={{ fontSize: 20, mt: 5 }}>
        Register or Login
      </Typography>

      <Link to="/login" state={{ from: "/" }}>
        <Button
          sx={{
            minWidth: 200,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
              color: "primary.contrastText",
            },
          }}
        >
          Login
        </Button>
      </Link>
      <Link to="/register" state={{ from: "/" }}>
        <Button
          sx={{
            minWidth: 200,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
              color: "primary.contrastText",
            },
          }}
        >
          Register
        </Button>
      </Link>
    </Box>
  );
};

export default Home;
