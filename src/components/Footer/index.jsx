// Footer.jsx
import React from "react";
import { FooterContainer, FooterContent, FooterText } from "./styledComponents";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
