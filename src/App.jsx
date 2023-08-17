import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/shared-layout/SharedLayout";
import HomePage from "./pages/home-page/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
