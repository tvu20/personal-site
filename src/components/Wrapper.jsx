import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Wrapper(props) {
  //   const { pathname } = useLocation();
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Wrapper;
