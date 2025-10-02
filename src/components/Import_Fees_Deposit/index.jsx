import React from "react";
import styled from "styled-components";

export default function Objectives() {
  return (
    <Container>
      <Content>
        <Title>Import Fees and Deposit</Title>

        <Paragraph>
          As imported products, Magic Tree Global Industrial Products may be
          subject to Import Tax and Fees. As the importer on record, you are
          solely responsible for paying these taxes and fees. We will estimate
          the amount of Import Tax and Fees (the "Estimated Import Tax and
          Fees") for Amazon Global Store Products and charge them to you when
          you place an order.
        </Paragraph>

        <Paragraph>
          For each Amazon Global Store Product on which the Estimated Import Tax
          and Fees are charged, you authorise Amazon US to designate a carrier
          ("Designated Carrier") to act as your agent with the relevant customs
          and tax authorities, to carry out the customs clearance for the
          merchandise, process and pay the Actual Import Tax and Fees for such
          items.
        </Paragraph>

        <Paragraph>
          The Estimated Import Tax and Fees may not be the same as the actual
          amount paid to the relevant Indian authorities (the "Actual Import Tax
          and Fees"). Customs regulations and tax rates applicable to certain
          goods may change between the date the taxes and duties were estimated
          and the applicable taxes and duties on the date of import into India.
          The duty or tax rate is determined by the classification of a good and
          the total value of your imported products.
        </Paragraph>

        <Paragraph>
          The Estimated Import Tax and Fees will be used, on your behalf, to
          reimburse the Designated Carriers for the Actual Import Tax Fees that
          they have paid on your behalf to the appropriate authorities. You
          further agree that the Designated Carrier or other agent may disclose
          to Magic Tree India the Actual Import Tax and Fees along with any
          other information that Amazon requests to validate the payment of the
          Actual Import Tax and Fees.
        </Paragraph>

        <Paragraph>
          If the Actual Import Tax and Fees are less than the Estimated Import
          Tax and Fees, you'll automatically be refunded the difference. You'll
          receive a notification e-mail confirming the amount of the refund. The
          process takes approximately 60 days from the date on which the customs
          clearance completes for you to receive any refunded amount. If the
          Actual Import Tax and Fees are more than the Estimated Import Tax and
          Fees, you will not be charged any additional amounts.
        </Paragraph>

        <Paragraph>
          To obtain details regarding the actual Import Fees, or to obtain
          documentation or receipts in connection with customs clearance, you
          may contact the Designated Carrier specified in your shipment
          confirmation e-mail. You agree to grant the authorizations (in
          Annexure-1) on behalf of yourself or the receipt designated in case of
          gifts or other purchases made on behalf of another recipient in your
          order for Magic Tree Global Industrial products.
        </Paragraph>
        <Paragraph>
          You are required to provide identity and address proof to receive the
          delivery of the Global Store Products as per the Know Your Customer
          (KYC) documents norms that are applicable to import of products into
          India. List of identity proof that can be submitted as per the KYC
          Norms are:
          <ul>
            <li>- Driving License</li>
            <li>- PAN</li>
            <li>- Aadhar Card </li>
            <li>- Passport</li>
          </ul>
        </Paragraph>

        <button
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/18e7IrL6xv90DWx-wf7qLSAMPSTjk_Fd1/view",
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
