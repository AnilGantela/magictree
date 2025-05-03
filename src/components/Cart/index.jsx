import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
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
  ItemImage,
  ItemDetails,
  ItemTitle,
  ItemPriceQuantityWrapper,
  ItemPrice,
  QuantityText,
  TotalSection,
  TotalLabel,
  TotalValue,
  CheckoutButton,
  QuantityButton,
} from "./styledComponents";
import { useNavigate } from "react-router-dom";

const Cart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(Cookies.get("cart") || "[]");
    console.log("🧾 Cart loaded from cookies:", cart);
    setCartItems(cart);
  }, [isOpen]);

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCart);
    Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7, path: "/" });
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7, path: "/" });
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item._id === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null; // Remove the item
        }
        return item;
      })
      .filter(Boolean); // Remove nulls

    setCartItems(updatedCart);
    Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7, path: "/" });
  };

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
            <>
              {cartItems.map((item) => (
                <CartItem key={item._id || item.id}>
                  <ItemImage src={item.image} alt={item.name} />
                  <ItemDetails>
                    <ItemTitle>{item.name}</ItemTitle>
                    <ItemPriceQuantityWrapper>
                      <ItemPrice>₹{item.price - item.discount}</ItemPrice>

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <QuantityButton
                          onClick={() => handleDecreaseQuantity(item._id)}
                        >
                          -
                        </QuantityButton>
                        <QuantityText>{item.quantity}</QuantityText>
                        <QuantityButton
                          onClick={() => handleIncreaseQuantity(item._id)}
                        >
                          +
                        </QuantityButton>
                      </div>
                    </ItemPriceQuantityWrapper>
                  </ItemDetails>
                </CartItem>
              ))}
              <div>
                <TotalSection>
                  <TotalLabel>Total:</TotalLabel>
                  <TotalValue>₹{totalPrice}</TotalValue>
                </TotalSection>
                <CheckoutButton onClick={handleCheckout}>
                  Proceed to Checkout
                </CheckoutButton>
              </div>
            </>
          )}
        </CartContent>
      </CartSidebar>
    </>
  );
};

export default Cart;
