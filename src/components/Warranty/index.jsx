import React from "react";
import styled from "styled-components";

export default function WarrantyPolicy() {
  return (
    <Container>
      <Content>
        <Title>Magic Tree Global Industrial Products</Title>
        <Subtitle>Warranty & Product Description Policy</Subtitle>

        <Paragraph>
          <strong>Warranty Information:</strong> Magic Tree Global Industrial
          Products come with manufacturer warranties and after-sale services
          that apply only within India. These warranties and services do not
          extend to products used or purchased outside India.
        </Paragraph>

        <Paragraph>
          <strong>Product Description & Pricing:</strong> Magic Tree strives to
          ensure that all product descriptions and pricing on Magic Tree Global
          Industrial Store are accurate. However, we do not guarantee that
          descriptions are error-free, complete, reliable, or up-to-date.
        </Paragraph>

        <Paragraph>
          <strong>Customer Remedy:</strong> If a product received from Magic
          Tree India does not match its description, your sole remedy is to
          return the product for a full refund.
        </Paragraph>

        <Paragraph>
          For any warranty or product-related concerns, please contact Magic
          Tree India’s customer support.
        </Paragraph>

        <button
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1bvw0hFuNPsqt-eDbpb3ciNfW1VFofrom/view",
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
  margin-bottom: 15px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.h2`
  font-size: 22px;
  color: #111827;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
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
