import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "../header/Header";

const ShardLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ShardLayout;
