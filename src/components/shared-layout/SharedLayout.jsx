import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "../header/Header";

const ShardLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default ShardLayout;
