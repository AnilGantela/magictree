import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const FooterContainer = styled.footer`
  background: linear-gradient(
    to right,
    hsla(151, 93%, 22%, 1) 0%,
    hsla(151, 97%, 12%, 1) 100%
  );
  color: white;
  padding-top: 10px 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
`;

export const FooterSection = styled.div`
  margin-bottom: 20px;
`;

export const FooterTitle = styled.h3`
  font-size: 18px;
  color: #fff;
  margin-bottom: 15px;
  font-weight: 600;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FooterListItem = styled.li`
  font-size: 14px;
  color: #fff;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    color: #046a38;
  }
`;

export const ContactInfo = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #fff;
  margin-bottom: 10px;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 15px;
  margin-top: 10px;
`;

export const IconLink = styled.a`
  color: #fff;
  font-size: 20px;
  transition: color 0.3s;

  &:hover {
    color: #046a38;
  }
`;

export const FooterText = styled.p`
  font-size: 14px;
  letter-spacing: 0.5px;
  margin-top: 20px;
  color: #fff;
  border-top: 1px solid #fff;
  dispqlay: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const IconText = styled.span`
  margin-left: 8px;
`;
