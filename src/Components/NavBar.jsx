import React from "react";
import Logo from "../assets/Images/logo.png";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {title: "Inicio", link: "/" },
    {title: "Películas", link: "/peliculas" },
    {title: "Series", link: "/series" },
    {title: "Nosotros", link: "/sobre-nosotros" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Cerrar el menú al hacer clic en un enlace
  };

  return (
    <Navbar isBordered isBlurred={false} classNames={{
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
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand className="navbar-leftSide">
            <img src={Logo} alt="Logo de la aplicación"></img>
            <h1 className="font-semibold">HongisMovie</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.title}-${index}`} isActive={location.pathname === item.link}>
            <Link color="foreground" className="navbar-rightSide" href={item.link} onClick={handleLinkClick}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              className="w-full"
              color={index === 2 ? "blue" : index === menuItems.length - 1 ? "blue" : "foreground"}
              href={item.link}
              size="lg"
              onClick={handleLinkClick}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
