import React from "react";
import styled from "styled-components";

export default function Terms_Conditions() {
  return (
    <Container>
      <Content>
        <Title>Terms & Conditions</Title>

        <Paragraph>
          Those items for shipment to countries outside of the India may be
          subject to taxes, customs duties and fees levied by the destination
          country ("Import Fees"). The recipient of the shipment is the importer
          of record in the destination country and is responsible for all Import
          Fees.
        </Paragraph>

        <Paragraph>
          With respect to each item for which Import Fees have been calculated,
          you authorize Magic Tree Export or Merchant (as applicable) to
          designate a carrier ("Designated Carrier") to act as your agent with
          the relevant customs and tax authorities in the destination country,
          to clear your merchandise, process and remit your actual Import Fees
          for such item.
        </Paragraph>
        <Paragraph>
          "Import Fees Deposit" represents an estimate of the Import Fees that
          will be levied on the items in your order for shipment to countries
          outside of the India. By placing your order, you agree to allow Magic
          Tree Export and/or Merchant (as applicable) to collect the Import Fees
          Deposit for the applicable items in your order. This deposit will be
          used, on your behalf, to reimburse the Designated Carriers for the
          import fees that they have paid on your behalf to the appropriate
          authorities of the destination country.
        </Paragraph>

        <Paragraph>
          You further agree that the Designated Carriers may disclose to Magic
          Tree Export or Merchant (as applicable) the amount of actual Import
          Fees levied on the item you have purchased from Magic Tree and/or
          Merchant ("Actual Import Fees"). In the event that the Import Fees
          Deposit exceeds the Actual Import Fees, MagicTree Export or Merchant
          (as applicable) will refund the difference to you.
        </Paragraph>

        <Paragraph>
          To obtain details regarding the Actual Import Fees, or to obtain
          documentation or receipts in connection with customs clearance, you
          may contact the Designated Carrier specified in your shipment
          confirmation. These terms and conditions are in addition to the
          standard Conditions of Use of the Magic Tree website. Pursuant to
          those terms, title and risk of loss for the items transfer to the
          recipient upon delivery to the common carrier in the India.
        </Paragraph>

        <Paragraph>
          Please note that Merchants participating in the International Direct
          program may have policies that differ from Magic Tree Export's terms
          and conditions. For items you have purchased from a Merchant, please
          see the applicable Merchant's policies for any other terms and
          conditions that may apply to your purchase of such items.
        </Paragraph>

        <Paragraph>
          Limitations For products shipped internationally, please note that any
          manufacturer warranty may not be valid; manufacturer service options
          may not be available; product manuals, instructions and safety
          warnings may not be in destination country languages; the products
          (and accompanying materials) may not be designed in accordance with
          destination country standards, specifications, and labeling
          requirements; and the products may not conform to destination country
          voltage and other electrical standards (requiring use of an adapter or
          converter if appropriate). You are responsible for assuring that the
          product can be lawfully imported to the destination country. When
          ordering from magictree.in, the recipient is the importer of record
          and must comply with all laws and regulations of the destination
          country.
        </Paragraph>

        <button
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1QY1W9uVdoM_48Hgq2g1EtkN03zxsCAgq/view",
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
