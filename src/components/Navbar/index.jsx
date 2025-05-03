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
  IconButton,
} from "./styledComponents";
import Cart from "../Cart";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

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
              <NavbarLink to="/industrial">Industrial</NavbarLink>
            </NavbarItem>

            <NavbarItem>
              <NavbarLink to="/security-safety">Security & Safety</NavbarLink>
              <Dropdown>
                <DropdownItem to="/security-safety/biometrics">
                  Biometrics
                </DropdownItem>
                <DropdownItem to="/security-safety/cctv">
                  CCTV Surveillance
                </DropdownItem>
              </Dropdown>
            </NavbarItem>

            <NavbarItem>
              <NavbarLink to="/eco-friendly">Eco Friendly</NavbarLink>
              <Dropdown>
                <DropdownItem to="/eco-friendly/bags">Bags</DropdownItem>
                <DropdownItem to="/eco-friendly/chappals">
                  Chappals
                </DropdownItem>
                <DropdownItem to="/eco-friendly/clothes">Clothes</DropdownItem>
              </Dropdown>
            </NavbarItem>

            <NavbarItem>
              <NavbarLink to="/hr-consultancy">HR Consultancy</NavbarLink>
              <Dropdown>
                <DropdownItem to="/hr/internships">
                  Internships/Summer Projects
                </DropdownItem>
                <DropdownItem to="/hr/planning">
                  Man Power Planning
                </DropdownItem>
                <DropdownItem to="/hr/training">Training</DropdownItem>
                <DropdownItem to="/hr/appraisal">
                  Appraisal Systems
                </DropdownItem>
                <DropdownItem to="/hr/recruitment">
                  Recruitment/Placements
                </DropdownItem>
              </Dropdown>
            </NavbarItem>

            <NavbarItem>
              <NavbarLink to="/marketing">Marketing</NavbarLink>
              <Dropdown>
                <DropdownItem to="/marketing/research">
                  Market Research
                </DropdownItem>
                <DropdownItem to="/marketing/selling">
                  Product Selling/Buying
                </DropdownItem>
                <DropdownItem to="/marketing/advertising">
                  Advertising
                </DropdownItem>
                <DropdownItem to="/marketing/design">
                  Product Design
                </DropdownItem>
                <DropdownItem to="/marketing/pricing">
                  Product Pricing
                </DropdownItem>
              </Dropdown>
            </NavbarItem>

            {/* Cart Icon */}
            <NavbarItem>
              <IconButton onClick={() => setCartOpen(true)} title="Cart">
                <FaShoppingCart size={20} />
              </IconButton>
            </NavbarItem>

            {/* Profile Icon if logged in */}
            {isLoggedIn && (
              <NavbarItem>
                <IconButton as={Link} to="/profile" title="Profile">
                  <FaUserCircle size={22} />
                </IconButton>
              </NavbarItem>
            )}
          </NavbarLinks>
        </NavbarWrapper>
      </NavbarContainer>

      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
