import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
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
  AddAddressButton,
  AddressFormContainer,
  AddressFormInput,
} from "./styledComponents";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const discount = 50;
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  const token = Cookies.get("magicTreeToken");

  useEffect(() => {
    // Load cart
    if (location.state?.product) {
      setCart([location.state.product]);
    } else {
      const cartCookie = Cookies.get("cart");
      if (cartCookie) {
        try {
          const parsedCart = JSON.parse(cartCookie);
          setCart(parsedCart);
        } catch (err) {
          console.error("Error parsing cart:", err);
        }
      }
    }

    // Load addresses
    const fetchAddresses = async () => {
      try {
        const res = await axios.get(
          "https://magictreebackend.onrender.com/user/addresses",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAddresses(res.data);
        if (res.data.length > 0) {
          const defaultIndex = res.data.findIndex((a) => a.isDefault);
          setSelectedAddressIndex(defaultIndex !== -1 ? defaultIndex : 0);
        }
      } catch (err) {
        console.error("Failed to fetch addresses:", err);
      }
    };

    fetchAddresses();
  }, [location.state]);

  const calculateTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0) - discount;

  const handlePayNow = () => {
    if (!name || !phone || selectedAddressIndex === null) {
      alert("Please complete name, phone, and address selection.");
      return;
    }

    const selectedAddress = addresses[selectedAddressIndex];

    alert(`Payment Successful!
Name: ${name}
Phone: ${phone}
Deliver To: ${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}`);

    navigate("/");
  };

  const handleAddAddress = async () => {
    try {
      const res = await axios.post(
        "https://magictreebackend.onrender.com/user/address",
        newAddress,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
    }
  };

  return (
    <CheckoutContainer>
      <h1>Checkout</h1>

      <SectionTitle>Cart Items</SectionTitle>
      <CartList>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem key={item._id}>
              {item.name} - ₹{item.price} x {item.quantity}
            </CartItem>
          ))
        ) : (
          <CartItem>No items in the cart.</CartItem>
        )}
      </CartList>

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

      <SectionTitle>Select Address</SectionTitle>
      <CartList
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
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
                width: "300px",
                margin: "10px",
              }}
              onClick={() => setSelectedAddressIndex(idx)}
            >
              <label>
                <input
                  type="radio"
                  name="address"
                  checked={selectedAddressIndex === idx}
                  onChange={() => setSelectedAddressIndex(idx)}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
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

      {showAddAddressForm && (
        <AddressFormContainer>
          <AddressFormInput
            value={newAddress.street}
            onChange={(e) =>
              setNewAddress({ ...newAddress, street: e.target.value })
            }
            placeholder="Street"
          />
          <AddressFormInput
            value={newAddress.city}
            onChange={(e) =>
              setNewAddress({ ...newAddress, city: e.target.value })
            }
            placeholder="City"
          />
          <AddressFormInput
            value={newAddress.state}
            onChange={(e) =>
              setNewAddress({ ...newAddress, state: e.target.value })
            }
            placeholder="State"
          />
          <AddressFormInput
            value={newAddress.zip}
            onChange={(e) =>
              setNewAddress({ ...newAddress, zip: e.target.value })
            }
            placeholder="ZIP"
          />
          <AddressFormInput
            value={newAddress.country}
            onChange={(e) =>
              setNewAddress({ ...newAddress, country: e.target.value })
            }
            placeholder="Country"
          />
          <button onClick={handleAddAddress}>Add Address</button>
        </AddressFormContainer>
      )}

      {!showAddAddressForm && (
        <AddAddressButton onClick={() => setShowAddAddressForm(true)}>
          Add New Address
        </AddAddressButton>
      )}

      <SectionTitle>Summary</SectionTitle>
      <SummaryText>Discount: ₹{discount}</SummaryText>
      <SummaryText>Total Amount: ₹{calculateTotal()}</SummaryText>
      <SummaryText>
        Expected Delivery Date: {deliveryDate.toDateString()}
      </SummaryText>

      <ButtonGroup>
        <BackButton onClick={() => navigate(-1)}>Back</BackButton>
        <PayButton onClick={handlePayNow}>Pay Now</PayButton>
      </ButtonGroup>
    </CheckoutContainer>
  );
};

export default Checkout;
