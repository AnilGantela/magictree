import React, { useState } from "react";
import {
  CheckoutContainer,
  SectionTitle,
  CartList,
  CartItem,
  AddressInput,
  SummaryText,
  ButtonGroup,
  BackButton,
  PayButton,
  BackToHomeLink,
} from "./styledComponents";

const Checkout = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", price: 100, quantity: 2 },
    { id: 2, name: "Product 2", price: 200, quantity: 1 },
  ]);

  const [address, setAddress] = useState("");
  const discount = 50;
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0) -
    discount;

  const handlePayNow = () => {
    alert("Payment Successful!");
  };

  return (
    <CheckoutContainer>
      <BackToHomeLink to="/">← Back to Home</BackToHomeLink>

      <h1>Checkout</h1>

      <SectionTitle>Cart Items</SectionTitle>
      <CartList>
        {cart.map((item) => (
          <CartItem key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </CartItem>
        ))}
      </CartList>

      <SectionTitle>Address</SectionTitle>
      <AddressInput
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
      />

      <SectionTitle>Summary</SectionTitle>
      <SummaryText>Discount: ${discount}</SummaryText>
      <SummaryText>Total Amount: ${calculateTotal()}</SummaryText>
      <SummaryText>
        Expected Delivery Date: {deliveryDate.toDateString()}
      </SummaryText>

      <ButtonGroup>
        <BackButton onClick={() => (window.location.href = "/")}>
          Back
        </BackButton>
        <PayButton onClick={handlePayNow}>Pay Now</PayButton>
      </ButtonGroup>
    </CheckoutContainer>
  );
};

export default Checkout;
