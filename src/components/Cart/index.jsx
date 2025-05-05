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
  TotalSection,
  TotalLabel,
  TotalValue,
  CheckoutButton,
} from "./styledComponents";
import { useNavigate } from "react-router-dom";

const Cart = ({ isOpen, onToggle }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const cart = JSON.parse(Cookies.get("cart") || "[]");
      // Filter out null/invalid items
      const validItems = cart.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          item.image &&
          item.name &&
          typeof item.price === "number" &&
          typeof item.discount === "number"
      );
      setCartItems(validItems);
    } catch (err) {
      console.error("Error parsing cart from cookies:", err);
      setCartItems([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + (item.price - item.discount) * (item.quantity || 1),
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const handleCheckout = () => {
    onToggle(); // Close cart
    navigate("/checkout");
  };

  return (
    <>
      {isOpen && <CartOverlay onClick={onToggle} />}
      <CartSidebar $isOpen={isOpen}>
        <CartHeader onClick={onToggle}>
          <CartTitle>Your Cart</CartTitle>
          <CloseButton>{isOpen ? "▼" : "▲"}</CloseButton>
        </CartHeader>
        {isOpen && (
          <CartContent>
            {cartItems.length === 0 ? (
              <EmptyCartImageWrapper>
                <EmptyCartImage src="/noproducts.png" alt="No products" />
              </EmptyCartImageWrapper>
            ) : (
              <>
                {cartItems.map((item) => (
                  <CartItem key={item._id || item.id}>
                    <ItemImage
                      src={item.image || "/fallback-image.png"}
                      alt={item.name || "Product image"}
                    />
                    <ItemDetails>
                      <ItemTitle>{item.name}</ItemTitle>
                      <ItemPriceQuantityWrapper>
                        <ItemPrice>
                          ₹{(item.price - item.discount).toFixed(2)}
                        </ItemPrice>
                      </ItemPriceQuantityWrapper>
                    </ItemDetails>
                  </CartItem>
                ))}
                <TotalSection>
                  <TotalLabel>Total:</TotalLabel>
                  <TotalValue>₹{totalPrice.toFixed(2)}</TotalValue>
                </TotalSection>
                <CheckoutButton onClick={handleCheckout}>
                  Proceed to Checkout
                </CheckoutButton>
              </>
            )}
          </CartContent>
        )}
      </CartSidebar>
    </>
  );
};

export default Cart;
