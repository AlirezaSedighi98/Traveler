import { logRoles, render, screen } from "@testing-library/react";

import Navbar from "../../layout/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

describe("navbar", () => {
  test("render", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const navlinks = screen.getAllByRole("navigationLink");
    expect(navlinks.length).toBe(5);
  });

  test("Home Link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const navlinks = screen.getAllByRole("navigationLink");
    expect(navlinks[0]).toHaveTextContent("Home");
  });

  test("Explore Link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const navlinks = screen.getAllByRole("navigationLink");
    expect(navlinks[1]).toHaveTextContent("Explore");
  });

  test("Pic Link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const navlinks = screen.getAllByRole("navigationLink");
    expect(navlinks[2]).toHaveTextContent("Travler");
  });

  test("About Us Link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const navlinks = screen.getAllByRole("navigationLink");
    expect(navlinks[3]).toHaveTextContent("About us");
  });

  test("Links Link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const navlinks = screen.getAllByRole("navigationLink");
    expect(navlinks[4]).toHaveTextContent("Links");
  });
});

