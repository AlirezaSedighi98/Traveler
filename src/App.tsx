import { Button } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Navbar from "./layout/navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
