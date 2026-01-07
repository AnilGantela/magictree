import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitleBox = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2vh;
  background: hsla(20, 100%, 22%, 1);

  background: linear-gradient(
    to right,
    hsla(20, 100%, 22%, 1) 0%,
    hsla(19, 100%, 56%, 1) 100%
  );

  background: -moz-linear-gradient(
    left,
    hsla(20, 100%, 22%, 1) 0%,
    hsla(19, 100%, 56%, 1) 100%
  );

  background: -webkit-linear-gradient(
    right,
    hsla(20, 100%, 22%, 1) 0%,
    hsla(19, 100%, 56%, 1) 100%
  );

  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#712600", endColorstr="#FF671F", GradientType=1);
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ContainerTitle = styled.h1`
  font-size: clamp(1rem, 2.5vw, 2rem);
  padding-left: 10px;
  color: white;
`;

export const CheckoutFlexContainer = styled.div`
  width: 98vw;
  height: 88vh;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    height: auto;
    align-items: center;
  }
`;

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    width: 50%;
    height: auto;
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    width: 90%;
    height: auto;
    align-items: center;
  }
`;

export const CartItemTitleContainer = styled.div`
  width: 100%;
  text-align: center;
  background: linear-gradient(
    to right,
    hsla(151, 93%, 22%, 1) 0%,
    hsla(151, 97%, 12%, 1) 100%
  );
  color: white;
`;
export const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const CartList = styled.div`
  list-style-type: none;
  padding: 10px;
  margin: 0;
  overflow-y: auto;
  height: 75vh;

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: hsla(151, 93%, 22%, 1) transparent;

  /* Chrome, Safari, Edge */
  &::-webkit-scrollbar {
    width: 6px; /* thin width */
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: hsla(151, 93%, 22%, 1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: hsla(151, 93%, 22%, 0.8);
  }
`;

export const CartItem = styled.div`
  background-color: #f9f9f9;
  padding: 2%;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 5px;
`;

export const ItemDetails = styled.p`
  flex: 1;
  margin-left: 10px;
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 58%;
  height: 100%;
  text-align: left;
`;

export const UserDetailsTitleContainer = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;

  color: black;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  padding-left: 5px;
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 100%;
  text-align: left;
`;

export const Input = styled.div`
  width: 40%;
  border-radius: 5px;
  display: flex;
  flex-drection: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: linear-gradient(to left, #06038d 0%, #1a1abf 100%);
  label {
    color: white;
    font-weight: bold;
  }
`;

export const NameInput = styled.input`
  width: 75%;
  padding: 10px;
  border-radius: 5px;
  border-color: hsla(151, 93%, 22%, 0.8);
`;

export const AddressInput = styled.input`
  width: 75%;
  padding: 10px;
  border-radius: 5px;
  border-color: hsla(151, 93%, 22%, 0.8);
`;
// Style for the "Add Address" button
export const AddAddressButton = styled.button`
  padding: 10px 10px;
  background: linear-gradient(to left, #06038d 0%, #1a1abf 100%);
  color: white;
  border: none;

  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// Style for address items in the list
export const AddressList = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  width: 95%;
  overflow-x: auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  gap: 10px;
  margin-top: 10px;
  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: hsla(151, 93%, 22%, 1) transparent;

  /* Chrome, Safari, Edge */
  &::-webkit-scrollbar {
    width: 6px; /* thin width */
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: hsla(151, 93%, 22%, 1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: hsla(151, 93%, 22%, 0.8);
  }
`;

export const AddressItem = styled.div`
  background-color: #f9f9f9;
  box-sizing: border-box;
  min-height: 100px;
  max-height: 130px;
  min-width: 170px;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
  input[type="radio"] {
    display: none;
  }
  border: ${(props) => (props.Selected ? "2px solid green" : "1px solid #ccc")};
  &:hover {
    border: 1px solid #007bff;
  }
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 100%;
  justify-content: flex-start;
  overflow: hidden;
`;

export const SummarySection = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
`;

export const SummaryTitleContainer = styled.div`
  width: 100%;
  text-align: center;
  background: linear-gradient(
    to right,
    hsla(151, 93%, 22%, 1) 0%,
    hsla(151, 97%, 12%, 1) 100%
  );
  color: white;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SummaryTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

export const SummaryContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  box-sizing: border-box;
  height: 85%;
`;

// Summary text for discount, total, and delivery date
export const SummaryText = styled.p`
  font-size: 1em;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SummaryAnswer = styled.span`
  font-weight: bold;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  color: red;
  text-align: right;
`;

export const PaymentSection = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
`;

// Group for action buttons (Back and Pay Now)
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

// Back button style
export const BackButton = styled.button`
  padding: 10px 10px;
  background-color: white;
  border: 3px solid red;
  border-radius: 1px;
  font-weight: bold;
  font-size: 1em;
  color: red;
  cursor: pointer;
  margin-right: 10px;
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

// Container for the address form when adding a new address
export const AddressFormContainer = styled.div`
  margin-top: 20px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
`;

// Input fields for the address form
export const AddressFormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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

export const PaymentButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  text-align: center;
`;
