import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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

  const discount = 50;
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);
  const token = Cookies.get("magicTreeToken");

  useEffect(() => {
    if (!token) {
      navigate("/login");
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
        console.log(res.data.items);
        setCartItems(res.data.items || []);
        setIsSingleProduct(false);
      } catch (err) {
        console.error("Failed to fetch cart items:", err);
      }
    };

    if (productId) {
      fetchProduct();
    } else {
      fetchCartItems();
    }

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

    fetchAddresses();
  }, [location.state, productId, token]);

  const calculateTotal = () =>
    cartItems.reduce(
      (sum, item) => sum + (item.price - (item.discount || 0)) * item.quantity,
      0
    ) - discount;

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
      price: item.price - (item.discount || 0),
    }));

    try {
      setLoading(true);
      const orderBody = {
        products: orderProducts,
        shippingAddress: shippingAddressString,
        shippingName: name,
        phoneNumber: phone,
        paymentMethod: paymentMethod,
      };

      console.log("Order body before sending:", orderBody);
      const orderRes = await axios.post(
        "https://magictreebackend.onrender.com/order/create",
        {
          products: orderProducts,
          shippingAddress: shippingAddressString,
          shippingName: name,
          phoneNumber: phone,
          paymentMethod: paymentMethod,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (paymentMethod === "Cash on Delivery") {
        alert("Order placed with Cash on Delivery!");
        navigate("/orders");
        return;
      }

      if (paymentMethod === "Online payment") {
        if (!window.Razorpay) {
          alert("Razorpay SDK not loaded. Please refresh page.");
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
      <SectionTitle>Cart Items</SectionTitle>
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
      <CartList style={{ display: "flex", flexWrap: "wrap" }}>
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
                width: "280px",
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
      {showAddAddressForm && (
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
      )}
      {/* Payment Method Selection */}
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
        <BackButton onClick={() => navigate("/cart")}>Back to Cart</BackButton>
        <PayButton onClick={handlePayNow} disabled={loading}>
          {loading ? "Processing..." : "Pay Now"}
        </PayButton>
      </ButtonGroup>
    </CheckoutContainer>
  );
};

export default Checkout;
