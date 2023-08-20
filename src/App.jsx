import React, { lazy, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";

import SharedLayout from "./components/shared-layout/SharedLayout";
import PrivateRoute from "./components/private-route/PrivateRoute";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Contacts = lazy(() => import("./pages/contacts/Contacts"));

//TODO: use react presist to save token in local storage

//TODO: look at this code to find possible bugs and fix them

const App = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.authSlice);

  useEffect(() => {
    if (token) {
      navigate("/contacts");
    }
  }, []);

  return (
    <Container sx={{ minheight: "100vh" }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
