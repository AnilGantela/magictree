import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.div`
  padding: 20px;
  width: 100%;
  min-height: 85vh;
  margin: 0 auto;
`;

// Section title for Cart Items, Deliver To, and Summary
export const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
`;

// List of cart items (products)
export const CartList = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

// Cart item, can be used to display individual product info
export const CartItem = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutFlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  border: 1px solid #ccc;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Address input fields
export const AddressInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Summary text for discount, total, and delivery date
export const SummaryText = styled.p`
  font-size: 1.1em;
  margin-bottom: 10px;
`;

// Group for action buttons (Back and Pay Now)
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

// Back button style
export const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

// Pay Now button style
export const PayButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

// Style for the "Add Address" button
export const AddAddressButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

// Container for the address form when adding a new address
export const AddressFormContainer = styled.div`
  margin-top: 20px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

// Input fields for the address form
export const AddressFormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Style for address items in the list
export const AddressItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  cursor: pointer;
  transition: border 0.3s;
  &:hover {
    border: 1px solid #007bff;
  }
`;

// Style for the radio button to select address
export const RadioInput = styled.input`
  margin-right: 10px;
`;

// Styling for displaying address in a letter-like format
export const AddressLetterFormat = styled.p`
  font-size: 1em;
  margin: 5px 0;
  line-height: 1.5;
  color: #333;
`;
