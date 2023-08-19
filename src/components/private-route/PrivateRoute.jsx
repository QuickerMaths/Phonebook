import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "../../redux/auth/operations";

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authSlice);

  useEffect(() => {
    dispatch(currentUser(token));
  }, []);

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
