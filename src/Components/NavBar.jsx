import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">INCIO</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Quienes Somos
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Películas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Series
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
