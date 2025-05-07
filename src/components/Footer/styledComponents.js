import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: hsla(151, 93%, 22%, 1);

  background: linear-gradient(
    to right,
    hsla(151, 93%, 22%, 1) 0%,
    hsla(151, 97%, 12%, 1) 100%
  );

  background: -moz-linear-gradient(
    left,
    hsla(151, 93%, 22%, 1) 0%,
    hsla(151, 97%, 12%, 1) 100%
  );

  background: -webkit-linear-gradient(
    left,
    hsla(151, 93%, 22%, 1) 0%,
    hsla(151, 97%, 12%, 1) 100%
  );

  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#046A38", endColorstr="#013E21", GradientType=1);

  color: white;
  padding: 20px 0;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 14px;
  letter-spacing: 0.5px;
`;
