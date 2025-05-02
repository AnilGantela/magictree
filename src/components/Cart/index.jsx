import React from "react";
import {
  CartOverlay,
  CartSidebar,
  CartHeader,
  CartTitle,
  CloseButton,
  CartContent,
  EmptyCartImageWrapper,
  EmptyCartImage,
  CartItem,
  ItemTitle,
  ItemPrice,
} from "./styledComponents";

const Cart = ({ isOpen, onClose, cartItems = [] }) => {
  return (
    <>
      {isOpen && <CartOverlay onClick={onClose} />}
      <CartSidebar isOpen={isOpen}>
        <CartHeader>
          <CartTitle>Your Cart</CartTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </CartHeader>
        <CartContent>
          {cartItems.length === 0 ? (
            <EmptyCartImageWrapper>
              <EmptyCartImage src="/noproducts.png" alt="no-products" />
            </EmptyCartImageWrapper>
          ) : (
            cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemPrice>Price: ₹{item.price}</ItemPrice>
              </CartItem>
            ))
          )}
        </CartContent>
      </CartSidebar>
    </>
  );
};

export default Cart;
