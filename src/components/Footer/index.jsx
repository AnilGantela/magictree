import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
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
  ModalOverlay,
  ModalContent,
  CloseButton,
} from "./styledComponents";

// Render Functions
const renderHome = () => (
  <>
    <h3>Home</h3>
    <p>
      Welcome to Magic Tree! Explore our platform and discover more about our
      services.
    </p>
    <p>About Our Founder and Managing Director of Magic Tree info solutions:</p>

    <button
      onClick={() => {
        window.open(
          "https://drive.google.com/file/d/1X64oZrqh2yvyo80XRVcnF0C3MuNPpw66/view",
          "_blank"
        );
      }}
      style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
    >
      Open PDF
    </button>
  </>
);

const renderObjectives = () => (
  <>
    <h3>Objectives</h3>
    <p>
      Magic Tree Info Solutions Pvt. Ltd. is dedicated to delivering innovative
      and comprehensive IT solutions across India and the globe. Our core
      expertise includes software and hardware development, ERP implementation,
      mobile and wireless technology, cloud computing, e-commerce solutions,
      ethical hacking, legal and medical consultancy, and cyber law services. We
      design, develop, import, export, assemble, and maintain a wide range of
      computing and telecommunication equipment. Additionally, we provide
      customized IT services including data processing, system integration, and
      multimedia applications. We also offer training, technical consultancy,
      business process outsourcing, and placement services across diverse
      domains such as software development, GIS, SEO, broadband technology, and
      smart card management. Our commitment lies in empowering enterprises with
      scalable digital solutions and delivering seamless experiences through
      advanced technology and research-driven strategies.
    </p>

    <button
      onClick={() => {
        window.open(
          "https://drive.google.com/file/d/1xMLjLnYXzn8rt2vDYURjqZdT0b1udz7t/view",
          "_blank"
        );
      }}
      style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
    >
      Open PDF
    </button>
  </>
);

const renderTerms = () => (
  <>
    <h3>Terms & Conditions</h3>
    <p>
      Please read our terms and conditions carefully to understand how we
      operate, your responsibilities as a user, and our legal obligations.
    </p>

    <button
      onClick={() => {
        window.open(
          "https://drive.google.com/file/d/1QY1W9uVdoM_48Hgq2g1EtkN03zxsCAgq/view",
          "_blank"
        );
      }}
      style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
    >
      Open PDF
    </button>
  </>
);

const renderPrivacyPolicy = () => (
  <>
    <h3>Privacy Policy</h3>
    <p>
      We prioritize your privacy. Learn how we collect, use, and protect your
      personal data in accordance with data protection laws.
    </p>

    <button
      onClick={() => {
        window.open(
          "https://drive.google.com/file/d/1E5xH9Hb1idI-YsUmXy-31RqMB5iv5guy/view",
          "_blank"
        );
      }}
      style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
    >
      Open PDF
    </button>
  </>
);

const renderImportFees = () => (
  <>
    <h3>Import Fees & Deposit</h3>
    <p>
      Learn about how import fees and deposits are calculated during checkout
      and how we ensure transparent pricing.
    </p>

    <button
      onClick={() => {
        window.open(
          "https://drive.google.com/file/d/18e7IrL6xv90DWx-wf7qLSAMPSTjk_Fd1/view",
          "_blank"
        );
      }}
      style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
    >
      Open PDF
    </button>
  </>
);

const renderWarranties = () => (
  <>
    <h3>Warranties</h3>
    <p>
      Magic Tree Global Industrial Products come with manufacturer warranties
      and after-sale services that apply only within India. These warranties and
      services do not extend to products used or purchased outside India.
    </p>
    <button
      onClick={() => {
        window.open(
          "https://drive.google.com/file/d/1bvw0hFuNPsqt-eDbpb3ciNfW1VFofrom/view",
          "_blank"
        );
      }}
      style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
    >
      Open PDF
    </button>
  </>
);

// Mapping of items to render functions
const renderFunctions = {
  Home: renderHome,
  Objectives: renderObjectives,
  "Terms & Conditions": renderTerms,
  "Privacy Policy": renderPrivacyPolicy,
  "Import Fees & Deposit": renderImportFees,
  Warranties: renderWarranties,
};

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem("");
  };

  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Information</FooterTitle>
            <FooterList>
              {Object.keys(renderFunctions).map((item) => (
                <FooterListItem key={item} onClick={() => openModal(item)}>
                  {item}
                </FooterListItem>
              ))}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <div>
                  <a
                    href="tel:+916281192474"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <FaPhoneAlt style={{ marginRight: "8px" }} /> +91 6281192474
                  </a>
                  <br />
                  <a
                    href="tel:+917013166557"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <FaPhoneAlt style={{ marginRight: "8px" }} /> +91 7013166557
                  </a>
                  <br />
                  <a
                    href="tel:+917013670892"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <FaPhoneAlt style={{ marginRight: "8px" }} /> +91 7013670892
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:info@magictree.in"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <FaEnvelope style={{ marginRight: "8px" }} />{" "}
                    info@magictree.in
                  </a>
                  <br />
                  <a
                    href="mailto:kolavennuc@gmail.com"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <FaEnvelope style={{ marginRight: "8px" }} />{" "}
                    kolavennuc@gmail.com
                  </a>
                  <br />
                  <a
                    href="mailto:md@magictree.in"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <FaEnvelope style={{ marginRight: "8px" }} />{" "}
                    md@magictree.in
                  </a>
                </div>
              </div>
              <div>
                <br />
                9-21-5/10, Flat No-302,
                <br />
                Lakshmi Narasimha Nilayam, C.B.M Compound, Near Timpany School,
                <br />
                Visakhapatnam (Urban)- 530003,
                <br />
                AP, India
              </div>
            </ContactInfo>
          </FooterSection>
        </FooterContent>
        <FooterText>
          &copy; {new Date().getFullYear()} magictree.com. developed by
          ALETNAG❤️.
        </FooterText>
      </FooterContainer>

      {/* Modal */}
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            {renderFunctions[selectedItem]()}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Footer;
