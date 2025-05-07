import React, { useEffect, useState } from "react";
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
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery"); // ✅ new state
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
    if (productId) {
      const fetchProduct = async () => {
        try {
          const res = await axios.get(
            `https://magictreebackend.onrender.com/products/${productId}`
          );
          setCartItems([{ ...res.data.product, quantity: 1 }]);
        } catch (err) {
          console.error("Failed to fetch product:", err);
        }
      };
      fetchProduct();
    } else {
      const fetchCartItems = async () => {
        try {
          const res = await axios.get(
            "https://magictreebackend.onrender.com/cart/items",
            { headers: { Authorization: `Bearer ${token}` } }
          );
          if (res.data && res.data.items) {
            setCartItems(res.data.items);
          }
        } catch (err) {
          console.error("Failed to fetch cart items:", err);
        }
      };

      if (location.state?.cartItems) {
        setCartItems(location.state.cartItems);
      } else {
        const cartCookie = Cookies.get("cart");
        if (cartCookie) {
          try {
            const parsedCart = JSON.parse(cartCookie);
            setCartItems(parsedCart);
          } catch (err) {
            console.error("Error parsing cart:", err);
          }
        } else {
          fetchCartItems();
        }
      }
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

  const handlePayNow = async () => {
    if (!name || !phone || selectedAddressIndex === null) {
      alert("Please complete name, phone, and address selection.");
      return;
    }

    const selectedAddress = addresses[selectedAddressIndex];

    try {
      const response = await axios.post(
        "https://magictreebackend.onrender.com/order/create",
        {
          products: cartItems,
          shippingAddress: selectedAddress,
          shippingName: name,
          phoneNumber: phone,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const { razorpayOrderId, razorpayKeyId, amount, currency } =
        response.data;

      const options = {
        key: razorpayKeyId,
        amount: amount.toString(),
        currency: currency,
        name: "Magic Tree",
        description: "Order Payment",
        order_id: razorpayOrderId,
        handler: async function (response) {
          // Verify payment on the server
          const verifyResponse = await axios.post(
            "https://magictreebackend.onrender.com/payment/verify",
            {
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            },
            { headers: { Authorization: `Bearer ${token}` } }
          );

          if (verifyResponse.data.success) {
            alert("Payment successful!");
            navigate("/orders");
          } else {
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: name,
          contact: phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Order creation failed:", err);
      alert("Failed to place order.");
    }
  };

  const handleAddAddress = async () => {
    try {
      const res = await axios.post(
        "https://magictreebackend.onrender.com/user/address",
        newAddress,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAddresses([...addresses, res.data]);
      setShowAddAddressForm(false);
      setNewAddress({ street: "", city: "", state: "", zip: "", country: "" });
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
          {["street", "city", "state", "zip", "country"].map((field) => (
            <AddressFormInput
              key={field}
              value={newAddress[field]}
              onChange={(e) =>
                setNewAddress({ ...newAddress, [field]: e.target.value })
              }
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            />
          ))}
          <button onClick={handleAddAddress}>Add Address</button>
        </AddressFormContainer>
      )}

      {!showAddAddressForm && (
        <AddAddressButton onClick={() => setShowAddAddressForm(true)}>
          Add New Address
        </AddAddressButton>
      )}

      <SectionTitle>Payment Method</SectionTitle>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px", width: "100%" }}
      >
        <option value="Cash on Delivery">Cash on Delivery</option>
        <option value="UPI">UPI</option>
        <option value="Credit Card">Credit Card</option>
        <option value="PayPal">PayPal</option>
      </select>

      <SectionTitle>Summary</SectionTitle>
      <SummaryText>Discount: ₹{discount}</SummaryText>
      <SummaryText>Total Amount: ₹{calculateTotal()}</SummaryText>
      <SummaryText>
        Expected Delivery Date: {deliveryDate.toDateString()}
      </SummaryText>

      <ButtonGroup>
        <BackButton onClick={() => navigate(-1)}>Back</BackButton>
        <PayButton onClick={handlePayNow}>Place Order</PayButton>
      </ButtonGroup>
    </CheckoutContainer>
  );
};

export default Checkout;
