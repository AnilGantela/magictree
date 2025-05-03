import React, { useEffect, useState } from "react";
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

// Utility function to get a cookie by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2)
    return decodeURIComponent(parts.pop().split(";").shift());
  return null;
};

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");

  const discount = 50;
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  useEffect(() => {
    const cartCookie = getCookie("cart");
    if (cartCookie) {
      try {
        const parsedCart = JSON.parse(cartCookie);
        setCart(parsedCart);
      } catch (error) {
        console.error("Failed to parse cart cookie:", error);
      }
    }
  }, []);

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
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </CartItem>
          ))
        ) : (
          <CartItem>No items in the cart.</CartItem>
        )}
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
