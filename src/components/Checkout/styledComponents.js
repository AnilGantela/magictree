import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fdfdfd;
  font-family: "Segoe UI", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const SectionTitle = styled.h2`
  margin-top: 24px;
  font-size: 1.3rem;
  color: #333;
  width: 100%;
  max-width: 600px;
`;

export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
`;

export const CartItem = styled.li`
  margin-bottom: 8px;
  font-size: 1rem;
`;

export const AddressInput = styled.textarea`
  width: 100%;
  max-width: 600px;
  height: 80px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
  box-sizing: border-box;
`;

export const SummaryText = styled.p`
  margin: 8px 0;
  font-size: 1rem;
  color: #444;
  width: 100%;
  max-width: 600px;
`;

export const BackToHomeLink = styled(Link)`
  align-self: flex-start;
  margin-bottom: 20px;
  font-size: 1rem;
  color: #0077cc;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: #005fa3;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  width: 100%;
  max-width: 600px;
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #ccc;
  color: #333;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`;

export const PayButton = styled.button`
  padding: 10px 20px;
  background-color: #ff671f;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #e55d1b;
  }
`;
