import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  background: hsla(20, 100%, 22%, 1);

  background: linear-gradient(
    to right,
    hsla(20, 100%, 22%, 1) 0%,
    hsla(19, 100%, 56%, 1) 100%
  );

  background: -moz-linear-gradient(
    left,
    hsla(20, 100%, 22%, 1) 0%,
    hsla(19, 100%, 56%, 1) 100%
  );

  background: -webkit-linear-gradient(
    left,
    hsla(20, 100%, 22%, 1) 0%,
    hsla(19, 100%, 56%, 1) 100%
  );

  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#712600", endColorstr="#FF671F", GradientType=1);

  padding: 1rem 10px;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLogo = styled(Link)`
  img {
    height: 90%;
    width: 100px;
  }
`;

export const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  margin-right: 1.5rem;
  padding: 0;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const NavbarItem = styled.li`
  position: relative;
  margin-left: 2rem;

  &:hover > div {
    display: block;
  }
`;

export const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #f0a500;
    text-shadow: 0 0 8px rgba(255, 165, 0, 0.7), 0 0 20px rgba(255, 165, 0, 0.6);
  }

  &:before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(145deg, #f0a500, #ffde00);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover:before {
    transform: scaleX(1);
  }
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 10px;
  left: 0;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 150px;
  padding: 0.5rem 0;
  border-radius: 6px;
`;

export const DropdownItem = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    background-color: #f5f5f5;
    color: #046a38;
  }
`;
