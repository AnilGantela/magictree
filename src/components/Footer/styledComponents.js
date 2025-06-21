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

  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  color: black;
  padding: 24px;
  width: 90%;
  border-radius: 12px;
  position: relative;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
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

export const ContactInfo = styled.div`
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
