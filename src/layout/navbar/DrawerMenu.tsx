import React, { useState } from "react";
import { Drawer, DrawerProps } from "@mui/material";
import { navLinks } from "./navLinks";
import { NavLink } from "react-router-dom";

const DrawerMenu = (props: DrawerProps) => {
  return (
    <Drawer anchor="top" {...props}>
      <nav className="drawer">
        {navLinks.map((item, index) => {
          return (
            <NavLink
              role="navigationLink"
              to={item.link}
              className="text-center"
              key={index}
            >
              {item.title}
            </NavLink>
          );
        })}
      </nav>
    </Drawer>
  );
};

export default DrawerMenu;
