import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";
import Cookies from "js-cookie";
import {
  CheckoutContainer,
  SectionTitle,
  CartList,
  CartItem,
  AddressInput,
  ButtonGroup,
  BackButton,
  PayButton,
  AddAddressButton,
  AddressFormContainer,
  AddressFormInput,
  CheckoutFlexContainer,
} from "./styledComponents";

// Simple Modal Component
const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            border: "none",
            background: "transparent",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = useParams();

  const [cartItems, setCartItems] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [isSingleProduct, setIsSingleProduct] = useState(false);
  const [newAddress, setNewAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);

  const token = Cookies.get("magicTreeToken");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://magictreebackend.onrender.com/products/${productId}`
        );
        setCartItems([{ ...res.data.product, quantity: 1 }]);
        setIsSingleProduct(true);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    const fetchCartItems = async () => {
      try {
        const res = await axios.get(
          "https://magictreebackend.onrender.com/cart/items",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCartItems(res.data.items || []);
        setIsSingleProduct(false);
      } catch (err) {
        console.error("Failed to fetch cart items:", err);
      }
    };

    const fetchAddresses = async () => {
      try {
        const res = await axios.get(
          "https://magictreebackend.onrender.com/user/addresses",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setAddresses(res.data);
        const defaultIdx = res.data.findIndex((a) => a.isDefault);
        setSelectedAddressIndex(defaultIdx !== -1 ? defaultIdx : 0);
      } catch (err) {
        console.error("Failed to fetch addresses:", err);
      }
    };

    productId ? fetchProduct() : fetchCartItems();
    fetchAddresses();
  }, [location.state, productId, token]);

  const handlePayNow = useCallback(async () => {
    if (!name || !phone || selectedAddressIndex === null) {
      alert("Please complete name, phone, and address selection.");
      return;
    }

    const selectedAddressObj = addresses[selectedAddressIndex];
    const shippingAddressString = `${selectedAddressObj.street}, ${selectedAddressObj.city}, ${selectedAddressObj.state}, ${selectedAddressObj.zip}, ${selectedAddressObj.country}`;

    const orderProducts = cartItems.map((item) => ({
      product: isSingleProduct ? item._id : item.productId,
      quantity: item.quantity,
      price: Math.ceil(item.price - (item.discount || 0)),
    }));

    try {
      setLoading(true);

      const orderRes = await axios.post(
        "https://magictreebackend.onrender.com/order/create",
        {
          products: orderProducts,
          shippingAddress: shippingAddressString,
          shippingName: name,
          phoneNumber: phone,
          paymentMethod,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (paymentMethod === "Cash on Delivery") {
        alert("Order placed with Cash on Delivery!");
        navigate("/profile/orders");
      } else {
        if (!window.Razorpay) {
          alert("Razorpay SDK not loaded.");
          return;
        }

        const { razorpayOrderId, razorpayKeyId, amount, currency } =
          orderRes.data;

        navigate("/payment", {
          state: {
            razorpayOrderId,
            razorpayKeyId,
            amount,
            name,
            phone,
            currency,
          },
        });
      }
    } catch (err) {
      console.error("Order creation failed:", err);
      alert("Failed to place order.");
    } finally {
      setLoading(false);
    }
  }, [
    name,
    phone,
    selectedAddressIndex,
    addresses,
    cartItems,
    paymentMethod,
    token,
    navigate,
  ]);

  const handleAddAddress = async () => {
    try {
      const res = await axios.post(
        "https://magictreebackend.onrender.com/user/address",
        newAddress,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAddresses([...addresses, res.data]);
      setShowAddAddressForm(false);
      setNewAddress({
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      });
    } catch (err) {
      console.error("Error adding address:", err);
      alert("Failed to add address.");
    }
  };

  return (
    <CheckoutContainer>
      <h1>Checkout</h1>
      <CheckoutFlexContainer>
        <div>
          <SectionTitle>Items</SectionTitle>
          <CartList>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem key={item._id || item.productId}>
                  {item.name} - ₹{item.price - (item.discount || 0)} x{" "}
                  {item.quantity}
                </CartItem>
              ))
            ) : (
              <CartItem>No items in cart.</CartItem>
            )}
          </CartList>
        </div>

        <div>
          <SectionTitle>Deliver To</SectionTitle>
          <AddressInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          <AddressInput
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            type="tel"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <SectionTitle>Select Address</SectionTitle>
            <AddAddressButton onClick={() => setShowAddAddressForm(true)}>
              Add New Address
            </AddAddressButton>
          </div>
          <CartList style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {addresses.length > 0 ? (
              addresses.map((addr, idx) => (
                <CartItem
                  key={idx}
                  style={{
                    border:
                      selectedAddressIndex === idx
                        ? "2px solid green"
                        : "1px solid #ccc",
                    cursor: "pointer",
                    flex: "0 1 calc(50% - 16px)", // 2 columns
                    boxSizing: "border-box",
                    padding: "10px",
                  }}
                  onClick={() => setSelectedAddressIndex(idx)}
                >
                  <label style={{ display: "flex", flexDirection: "column" }}>
                    <input
                      type="radio"
                      name="address"
                      checked={selectedAddressIndex === idx}
                      onChange={() => setSelectedAddressIndex(idx)}
                      style={{ marginBottom: "8px" }}
                    />
                    <div>
                      <p>{addr.street}</p>
                      <p>
                        {addr.city}, {addr.state}
                      </p>
                      <p>
                        {addr.zip}, {addr.country}
                      </p>
                    </div>
                  </label>
                </CartItem>
              ))
            ) : (
              <CartItem>No saved addresses found.</CartItem>
            )}
          </CartList>
        </div>

        <div>
          <SectionTitle>Payment Method</SectionTitle>
          <div>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={() => setPaymentMethod("Cash on Delivery")}
              />
              Cash on Delivery
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Online payment"
                checked={paymentMethod === "Online payment"}
                onChange={() => setPaymentMethod("Online payment")}
              />
              Pay Now
            </label>
          </div>

          <ButtonGroup>
            <BackButton onClick={() => navigate("/cart")}>
              Back to Cart
            </BackButton>
            <PayButton onClick={handlePayNow} disabled={loading}>
              {loading ? "Processing..." : "place order"}
            </PayButton>
          </ButtonGroup>
        </div>
      </CheckoutFlexContainer>

      {/* Address Popup Modal */}
      <Modal
        isOpen={showAddAddressForm}
        onClose={() => setShowAddAddressForm(false)}
      >
        <h3>Add New Address</h3>
        <AddressFormContainer>
          <AddressFormInput
            placeholder="Street"
            value={newAddress.street}
            onChange={(e) =>
              setNewAddress({ ...newAddress, street: e.target.value })
            }
          />
          <AddressFormInput
            placeholder="City"
            value={newAddress.city}
            onChange={(e) =>
              setNewAddress({ ...newAddress, city: e.target.value })
            }
          />
          <AddressFormInput
            placeholder="State"
            value={newAddress.state}
            onChange={(e) =>
              setNewAddress({ ...newAddress, state: e.target.value })
            }
          />
          <AddressFormInput
            placeholder="ZIP Code"
            value={newAddress.zip}
            onChange={(e) =>
              setNewAddress({ ...newAddress, zip: e.target.value })
            }
          />
          <AddressFormInput
            placeholder="Country"
            value={newAddress.country}
            onChange={(e) =>
              setNewAddress({ ...newAddress, country: e.target.value })
            }
          />
          <button onClick={handleAddAddress}>Add Address</button>
        </AddressFormContainer>
      </Modal>
    </CheckoutContainer>
  );
};

export default Checkout;
