import React from "react";
import styled from "styled-components";

export default function PrivacyPolicy() {
  return (
    <Container>
      <Content>
        <Title>Privacy Policy & Terms for Global Store</Title>

        <Paragraph>
          Your privacy is important to us, and we know that you care about how
          information about your order is used and shared. We would like our
          international customers and customers shipping products
          internationally to be aware that cross-border shipments are subject to
          opening and inspection by customs and/or postal authorities.
        </Paragraph>

        <Paragraph>
          Also, we may provide certain order, shipment, and product information,
          such as titles, to our international carriers, and such information
          may be communicated by the carriers to customs and/or postal
          authorities in order to facilitate customs clearance and comply with
          local laws.
        </Paragraph>

        <Paragraph>
          Welcome to the Global Store. Products in the Magic Tree Global Store
          ("Magic Tree Global Industrial Products") are sold and shipped by
          Magic Tree Export Sales, an Indian company ("Magic Tree India"). By
          placing an order for any Magic Tree Global Industrial Product(s), you
          agree to these Amazon Global Store Terms and Conditions (these "Terms
          and Conditions").
        </Paragraph>

        <Paragraph>
          <strong>Ordering from India; Applicable Law and Venue</strong>
          <br />
          When purchasing India Global Industrial Products, you acknowledge that
          (1) you are placing your order with Magic Tree India, (2) these
          products have not yet been imported into India at the time of
          purchase, and (3) the sale takes place in India, and therefore you
          agree that such sale is subject to the laws and regulations of India
          and the State of Andhra Pradesh will have the exclusive jurisdiction.
          In addition to these Terms and Conditions, the Condition of Use and
          Sale from MagicTree.in will also apply. The application of the Indian
          Contracts Act for the International Sale of Goods is expressly
          excluded. This clause is without prejudice to your rights to enforce
          your consumer protection rights in connection with these Terms and
          Conditions in India.
        </Paragraph>

        <Paragraph>
          If any provision of these Terms and Conditions conflicts with the
          MagicTree.in Conditions of Use & Sale, the conflict shall be resolved
          in the following order of priority: (1) these Terms and Conditions,
          (2) the MagicTree.in Conditions of Use & Sale.
        </Paragraph>

        <Paragraph>
          <strong>Responsibility for Importation</strong>
          <br />
          When ordering India Global Industrial Products, you are responsible
          for lawfully importing the product into India and act as the importer
          on record for customs purposes into India. The risk of loss and title
          for India Global Industrial Products that you purchase pass to you
          upon our delivery to the carrier. You may be subject to taxes and fees
          levied by Indian customs and tax authorities ("Import Tax and Fees"),
          which are triggered when a shipment is imported into India.
        </Paragraph>

        <Paragraph>
          You agree that you will be the final consumer of the product or that
          you will be giving the product to another individual as a gift, and in
          any case that the product is being purchased for personal use only and
          not for resale or for any commercial use.
        </Paragraph>
        <button
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1E5xH9Hb1idI-YsUmXy-31RqMB5iv5guy/view",
              "_blank"
            );
          }}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Open PDF
        </button>
      </Content>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  color: #e34c26;
  margin-bottom: 25px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #374151;
  line-height: 1.7;
  margin-bottom: 20px;

  strong {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
