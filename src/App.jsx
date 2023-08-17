import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/shared-layout/SharedLayout";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Contacts = lazy(() => import("./pages/contacts/Contacts"));
const Register = lazy(() => import("./pages/register/Register"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
