// src/components/Cart.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
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
  RemoveButton,
} from "./styledComponents";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { FiTrash2 } from "react-icons/fi";

const Cart = ({ isOpen, onToggle }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // ✅ Corrected typo
  const navigate = useNavigate();
  const token = Cookies.get("magicTreeToken");

  const fetchCart = async () => {
    setLoading(true);
    if (!token) {
      setLoading(false);
      setIsLoggedIn(false);
      setCartItems([]);
      return;
    }
    try {
      const res = await axios.get(
        "https://magictreebackend.onrender.com/cart/items",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCartItems(res.data.items || []);
      setIsLoggedIn(true);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) fetchCart();
  }, [isOpen]);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) =>
        acc + ((item.price || 0) - (item.discount || 0)) * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const updateQuantity = async (productId, newQty) => {
    if (!token || newQty < 1) return;
    try {
      await axios.put(
        "https://magictreebackend.onrender.com/cart/update",
        { productId, quantity: newQty },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchCart();
    } catch (err) {
      console.error("Failed to update quantity:", err);
    }
  };

  const removeItem = async (productId) => {
    if (!token) return;
    try {
      await axios.delete(`https://magictreebackend.onrender.com/cart/remove`, {
        data: { productId },
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCart();
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
  };

  const handleCheckout = () => {
    onToggle();
    navigate("/checkout", { state: { cartItems } });
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
            {!isLoggedIn ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "350px",
                  width: "310px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    height: "80%",
                    width: "80%",
                  }}
                  src="/not-loggedin.png"
                  alt="Not logged in"
                />
                <Link to="/login">Please log in to view your cart.</Link>
              </div>
            ) : loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "350px",
                }}
              >
                <Loader color="orange" />
              </div>
            ) : cartItems.length === 0 ? (
              <EmptyCartImageWrapper>
                <EmptyCartImage src="/noproducts.png" alt="No products" />
              </EmptyCartImageWrapper>
            ) : (
              <>
                {cartItems.map((item) => (
                  <CartItem key={item.productId}>
                    <ItemImage
                      src={item.image || "/fallback-image.png"}
                      alt={item.name || "Product"}
                    />
                    <ItemDetails>
                      <ItemTitle>{item.name}</ItemTitle>
                      <ItemPriceQuantityWrapper>
                        <ItemPrice>
                          ₹
                          {(
                            (item.price || 0) -
                            ((item.price || 0) * (item.discount || 0)) / 100
                          ).toFixed(2)}
                        </ItemPrice>
                        <div style={{ display: "flex", gap: "6px" }}>
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <RemoveButton
                          onClick={() => removeItem(item.productId)}
                        >
                          <FiTrash2 size={18} />
                        </RemoveButton>
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
