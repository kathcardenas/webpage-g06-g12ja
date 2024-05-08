import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { useLocation } from "react-router-dom";


export default function App() {
  const location = useLocation();

  return (
    <Navbar isBordered classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}>
      <NavbarBrand className="sm:flex gap-4 p-8" justify="center">
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
      <NavbarItem isActive={location.pathname === "/"}>
          <Link color="foreground" href="/">
            INICIO
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/peliculas"}>
          <Link color="foreground" href="/peliculas">
            PELICULAS
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/series"}>
          <Link color="foreground" href="/series">
            SERIES
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/sobre-nosotros"}>
          <Link color="foreground" href="/sobre-nosotros">
              QUIENES SOMOS
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
