import { Container } from "@mui/material";
import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/shared-layout/SharedLayout";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
// const Contacts = lazy(() => import("./pages/contacts/Contacts"));

const App = () => {
  return (
    <Container sx={{ minHeight: "100vh" }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
