import React from "react";
import styled from "styled-components";

export default function Objectives() {
  return (
    <Container>
      <Content>
        <Title>Objectives</Title>

        <Paragraph>
          To carry on the business of developing, improving, exporting,
          analyzing, consulting, selling, distributing, importing, marketing
          and/ or licensing computer hardware, software and program packages
          including implementation and maintenance of Enterprise Resource
          Planning packages and wide variety of software and software
          development, application setup, modification, data conversion, data
          processing and interface development, graphics, networking, wireless
          technology including Bluetooth, mobile technology, provide tablet and
          mobile device based solutions, multi-media of all types and to act as
          computer software and hardware engineer and render software
          professional services, management consultancy service, technical
          assistance, cloud computing, including all business relating to cyber
          law consultancy, E-commerce, e-advertisements, e-solutions, legal
          transcriptions, e-medical consultancy, ethical hacking, internet,
          cyberspace cafe and to undertake turnkey software projects, operation
          research, online information services, customized information
          technologies including computer education, training, promotion and
          selection of personnel and placement in computer software and hardware
          and/or otherwise to provide complete hardware and software solutions
          and import, export, develop, assemble and maintain all kinds of
          computer systems and equipments of information technology,
          telecommunication and their peripheral, components, devices,
          accessories across the world and in India.
        </Paragraph>

        <Paragraph>
          To establish and carry on the business of assemblers, procurers,
          processors, makers, convertors, repairers, designers, developers,
          inventers, improvers, carryout research, collaborate, prepare, own,
          make use of, manufacture, fabricate, buy, trade, market, import,
          maintain, repair, alter, convert, process, distribute, market, hire,
          lease, dispose off and otherwise dealing in India and/or abroad as
          principal, licensee and/or agents in all kinds of computers, data
          processors, data processing machines, including, without limitation,
          personal computer hardware, portable/desktop computer, server,
          information technology equipments, computer hardware, peripherals,
          computer, system and application software, networking solutions,
          sub-assemblies, systems equipment or any other components,
          sub-assemblies, systems equipments, components used in
          tele-communications and Data Communications devices and products,
          including but not limited to cellular or video Telephones,
          calculators, tabulators, all kinds of equipments and their systems,
          raw materials, components and consumables and ancillaries, machines
          and appliances for industrial, commercial, banking, scientific,
          medical and statistical or any other purpose and any product or
          products thereof or materials, articles, software and hardware used in
          connection therewith or materials, articles, software and hardware
          used in connection therewith or ancillary thereto or otherwise and
          materials of every kind and description.
        </Paragraph>

        <Paragraph>
          To Carry on the business of development, marketing, import, export,
          maintenance and services of all kinds of manufactured goods and
          products for all kind of Business including manufactures and dealers
          in modern and accessories, hardware and accessories of every
          description for use in providing Internet, Intranets, Private
          Telecommunication Networks, or by any other means, E-mail service,
          facsimile service, education and training services, websites design
          and development, electronic market places, integral service digital
          networks, video Conferencing, including renting, maintaining,
          repairing and, for the purpose, to setup plants, machinery and to
          undertake all activities, directly or indirectly related to electronic
          commerce right from conception to transition, training,
          implementation, and modification and services related to
          Electronic-Commerce business, including developing content-based
          programs to exploit the Internet, Intranets and Private
          Telecommunication Networks or any other means for serving the cause of
          companies, groups of Companies, industries, service organizations and
          government and quasi-government undertaking whether in India/abroad.
        </Paragraph>

        <Paragraph>
          To initiate, undertake, carry on, engage in, promote, assist,
          encourage, and conduct scientific and technical research,
          developments, experiments, investigations, inquiries, studies,
          projects, analysis, examinations, surveys and test of all kinds
          including, but not limited to those related to telecommunications,
          computers, electronic data processing equipment, software, hardware
          and programmers of all kinds and description and any equipment, parts,
          components, assemblies or sub assemblies thereof whether in
          India/abroad.
        </Paragraph>

        <Paragraph>
          To carry on the business of and engage in delivering Information
          Technology services to cater to the business requirements of the
          clients across the world and in India to design, develop, test,
          maintain and support software systems in the areas of Business
          Applications, Enterprise Resource Planning (ERP), Customer
          Relationship Manager (CRM), Search Engine Optimization (SEO), data
          warehousing, data mining on all platforms from the legacy systems to
          multi-tier client/ server architectures.
        </Paragraph>

        <Paragraph>
          To carry on all kinds of business, consultancy services including
          information technology enabled services, business process outsourcing,
          establish and run call centers, provide enterprise solutions for
          networking, telecommunications, internet, intranet and multi-media
          requirements, advice and training programmers, run academic and
          practical classes, Back office administration, computer aided design,
          Computer aided management, act as franchises license holders and Human
          Resources Development, undertake placement services and Procure jobs
          on a global basis on a field of Computers, Software design Development
          and applications, Geographical Information systems, Broad Band
          Technology, Data Transcriptions, Hardware Manufacturing processes,
          Design and Development, Service and maintenance procedure to conduct
          all kinds of Business activities relating to Electronic Commerce
          including Business and Business to customer types and to act as Smart
          card managers in India and abroad.
        </Paragraph>

        <button
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1xMLjLnYXzn8rt2vDYURjqZdT0b1udz7t/view",
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
