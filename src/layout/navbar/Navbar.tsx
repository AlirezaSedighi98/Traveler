import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./navLinks";

const Navbar = () => {
  const leftLinks = navLinks.slice(0, Math.ceil(navLinks.length / 2));
  const rightLinks = navLinks.slice(Math.ceil(navLinks.length / 2));

  return (
    <div style={{ height: 80 }} className="navbarContainer">
      <div className="navLinks">
        {leftLinks.map((item, index) => (
          <NavLink className="links" key={index} to={item.link}>
            {item.title}
          </NavLink>
        ))}
      </div>
      <div className="logoImage">
        <img className="h-full" src="./images/logos/webLogo.png" alt="logo" />
      </div>
      <div className="navLinks">
        {rightLinks.map((item, index) => (
          <NavLink className="links" key={index} to={item.link}>
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
