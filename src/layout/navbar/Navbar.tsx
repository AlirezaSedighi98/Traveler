import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./navLinks";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DrawerMenu from "./DrawerMenu";

const Navbar = () => {
  const [drawerStatus, setDrawerStatus] = useState(false);

  const leftSideLinks = navLinks.slice(0, Math.ceil(navLinks.length / 2));
  const rightSideLinks = navLinks.slice(Math.ceil(navLinks.length / 2));

  return (
    <nav className="navbarContainer">
      <div className="navLinks">
        {leftSideLinks.map((item, index) => (
          <NavLink role="navigationLink" className="links" key={index} to={item.link}>
            {item.title}
          </NavLink>
        ))}
      </div>
      <NavLink role="navigationLink" to={"/"} className="logoImage">
        <img className="h-full" src="./images/logos/webLogo.png" alt="logo" />
        <h1 className="navHeader">Travler</h1>
      </NavLink>
      <div className="md:hidden">
        <IconButton onClick={() => setDrawerStatus(true)}>
          <MenuRoundedIcon color="primary" />
        </IconButton>
      </div>
      <div className="navLinks">
        {rightSideLinks.map((item, index) => (
          <NavLink role="navigationLink" className="links" key={index} to={item.link}>
            {item.title}
          </NavLink>
        ))}
      </div>
      <DrawerMenu open={drawerStatus} onClose={() => setDrawerStatus(false)} />
    </nav>
  );
};

export default Navbar;
