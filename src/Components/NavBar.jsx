import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";


export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link className="font-bold text-inherit" href="/">
          INICIO
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/sobre-nosotros">
            Quienes Somos
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/peliculas" aria-current="page">
            Películas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/series">
            Series
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
