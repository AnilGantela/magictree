import React, { useEffect, useState } from "react";
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
  RemoveButton, // Added button for removing an item
} from "./styledComponents";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi"; // Feather trash icon

const Cart = ({ isOpen, onToggle }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = Cookies.get("magicTreeToken");

  // Function to fetch the cart items from the backend
  const fetchCart = async () => {
    if (!token) return setCartItems([]);
    try {
      setLoading(true);
      const res = await axios.get(
        "https://magictreebackend.onrender.com/cart/items",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Cart response:", res.data.items);
      setCartItems(res.data.items || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch the cart when the cart overlay is opened
  useEffect(() => {
    if (isOpen) fetchCart();
  }, [isOpen]);

  // Calculate the total price of all items in the cart
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      const price = item.price || 0;
      const discount = item.discount || 0;
      const quantity = item.quantity || 1;
      return acc + (price - discount) * quantity;
    }, 0);
    setTotalPrice(total);
  }, [cartItems]);

  // Function to update the quantity of an item in the cart
  const updateQuantity = async (productId, newQuantity) => {
    if (!token || newQuantity < 1) return;

    try {
      await axios.put(
        "https://magictreebackend.onrender.com/cart/update",
        {
          productId,
          quantity: newQuantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchCart(); // Refresh cart after update
    } catch (err) {
      console.error("Failed to update quantity:", err);
    }
  };

  // Function to remove an item from the cart
  const removeItem = async (productId) => {
    if (!token) return;

    try {
      await axios.delete(`https://magictreebackend.onrender.com/cart/remove`, {
        data: { productId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchCart(); // Refresh cart after removal
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
  };

  // Function to handle checkout
  const handleCheckout = () => {
    onToggle();
    navigate("/checkout", { state: { cartItems } }); // Passing cartItems to checkout page
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
            {loading ? (
              <p style={{ padding: "1rem" }}>Loading cart...</p>
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
                          {((item.price || 0) - (item.discount || 0)).toFixed(
                            2
                          )}
                        </ItemPrice>
                        <div
                          style={{
                            display: "flex",
                            gap: "6px",
                            marginTop: "4px",
                          }}
                        >
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
