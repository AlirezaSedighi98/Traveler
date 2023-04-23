import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import DrawerMenu from "../../layout/navbar/DrawerMenu";

describe("drawer menu", () => {
  test("render", () => {
    render(
      <BrowserRouter>
        <DrawerMenu open={true} />
      </BrowserRouter>
    );
    const navLinks = screen.getAllByRole("navigationLink");
    expect(navLinks.length).toBe(4);
  });
  test("Home Link", () => {
    render(
      <BrowserRouter>
        <DrawerMenu open={true} />
      </BrowserRouter>
    );
    const navLinks = screen.getAllByRole("navigationLink");
    expect(navLinks[0]).toHaveTextContent("Home");
  });
  test("Explore Link", () => {
    render(
      <BrowserRouter>
        <DrawerMenu open={true} />
      </BrowserRouter>
    );
    const navLinks = screen.getAllByRole("navigationLink");
    expect(navLinks[1]).toHaveTextContent("Explore");
  });
  test("About us Link", () => {
    render(
      <BrowserRouter>
        <DrawerMenu open={true} />
      </BrowserRouter>
    );
    const navLinks = screen.getAllByRole("navigationLink");
    expect(navLinks[2]).toHaveTextContent("About us");
  });
  test("Links Link", () => {
    render(
      <BrowserRouter>
        <DrawerMenu open={true} />
      </BrowserRouter>
    );
    const navLinks = screen.getAllByRole("navigationLink");
    expect(navLinks[3]).toHaveTextContent("Links");
  });
});
