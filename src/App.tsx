import React from "react";
import { Outlet } from "react-router";
import Navbar from "./layout/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
