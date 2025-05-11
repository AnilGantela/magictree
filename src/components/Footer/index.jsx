import React from "react";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa"; // Import icons
import {
  FooterContainer,
  FooterContent,
  FooterText,
  FooterSection,
  FooterTitle,
  FooterList,
  FooterListItem,
  ContactInfo,
  SocialLinks,
  IconLink,
  IconText,
} from "./styledComponents";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Information</FooterTitle>
          <FooterList>
            <FooterListItem>Home</FooterListItem>
            <FooterListItem>Objectives</FooterListItem>
            <FooterListItem>Terms & Conditions</FooterListItem>
            <FooterListItem>Privacy Policy</FooterListItem>
            <FooterListItem>Import Fees & Deposit</FooterListItem>
            <FooterListItem>Warranties</FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Social Links</FooterTitle>
          <SocialLinks>
            <IconLink
              href="https://www.facebook.com/magictree.vizag.3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </IconLink>
            <IconLink
              href="https://x.com/Magictreevizag"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/magictree-vizag-850a0415a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </IconLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactInfo>
            <a
              href="tel:+916281192474"
              style={{ color: "white", textDecoration: "none" }}
            >
              <FaPhoneAlt style={{ marginRight: "8px" }} />
              +91 6281192474
            </a>{" "}
            <br />
            <a
              href="tel:+917013166557"
              style={{ color: "white", textDecoration: "none" }}
            >
              <FaPhoneAlt style={{ marginRight: "8px" }} />
              +91 7013166557
            </a>
            <br />
            <a
              href="tel:+917013670892"
              style={{ color: "white", textDecoration: "none" }}
            >
              <FaPhoneAlt style={{ marginRight: "8px" }} />
              +91 7013670892
            </a>
            <br />
            <a
              href="mailto:info@magictree.in"
              style={{ color: "white", textDecoration: "none" }}
            >
              <FaEnvelope style={{ marginRight: "8px" }} />
              info@magictree.in
            </a>
            <br />
            <a
              href="mailto:kolavennuc@gmail.com"
              style={{ color: "white", textDecoration: "none" }}
            >
              <FaEnvelope style={{ marginRight: "8px" }} />
              kolavennuc@gmail.com
            </a>
            <br />
            MAGIC TREE INFO SOLUTIONS PVT. LTD
            <br />
            #30-15-139, 1st Floor, Rams Arcade,
            <br />
            Dabagardens, Visakhapatnam - 530020, AP, India
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      <FooterText>
        &copy; {new Date().getFullYear()} magictree.com. Powered by ALETNAG .
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
