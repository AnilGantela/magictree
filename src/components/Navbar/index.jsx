import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarLogo,
  NavbarLinks,
  NavbarItem,
  NavbarLink,
  Dropdown,
  DropdownItem,
  ExternalDropdownItem,
} from "./styledComponents";
import Cart from "../Cart";

const Navbar = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on mount
  useEffect(() => {
    const token = Cookies.get("magicTreeToken");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarLogo to="/">
            <img src="/logo.jpg" alt="logo" />
          </NavbarLogo>
          <NavbarLinks>
            <NavbarItem>
              <NavbarLink>Security & Safety</NavbarLink>
              <Dropdown>
                <DropdownItem to="/security-safety/biometrics">
                  Biometrics
                </DropdownItem>
                <DropdownItem to="/security-safety/cctv surveillance">
                  CCTV Surveillance
                </DropdownItem>
              </Dropdown>
            </NavbarItem>

            <NavbarItem>
              <NavbarLink to="/profile">User</NavbarLink>
            </NavbarItem>
          </NavbarLinks>
        </NavbarWrapper>
      </NavbarContainer>

      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
