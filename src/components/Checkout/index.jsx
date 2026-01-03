import React, { useEffect, useState, useCallback, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import addAddress from "../../assets/addAddress.json"; // your Lottie file
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
  ContainerTitle,
  PaymentButtonContainer,
  ContainerTitleBox,
  ItemImage,
  CartItemContainer,
  UserDetailsContainer,
  CartItemTitleContainer,
  ItemDetails,
  NameInput,
  InputContainer,
  UserDetailsTitleContainer,
  Input,
  PaymentContainer,
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
  const lottieRef = useRef();

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
      navigate("/checkout");
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
      <ContainerTitleBox>
        <ContainerTitle>Checkout Page</ContainerTitle>
      </ContainerTitleBox>

      <CheckoutFlexContainer>
        <CartItemContainer>
          <CartItemTitleContainer>
            <SectionTitle>Items</SectionTitle>
          </CartItemTitleContainer>

          <CartList>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem key={item._id || item.productId}>
                  <ItemImage
                    src={item.image || "/fallback-image.png"}
                    alt={item.name || "Product"}
                  />
                  <ItemDetails>
                    {item.name} - ₹{item.price - (item.discount || 0)} x
                    {item.quantity}
                  </ItemDetails>
                </CartItem>
              ))
            ) : (
              <CartItem>No items in cart.</CartItem>
            )}
          </CartList>
        </CartItemContainer>

        <UserDetailsContainer>
          <UserDetailsTitleContainer>
            <SectionTitle>Deliver To :</SectionTitle>
          </UserDetailsTitleContainer>
          <InputContainer>
            <Input>
              <label htmlFor="nameInput">Name :</label>
              <NameInput
                id="nameInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="To Name"
              />
            </Input>

            <Input>
              <label htmlFor="phoneInput">Phone :</label>
              <AddressInput
                id="phoneInput"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                type="tel"
              />
            </Input>
          </InputContainer>

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              border: "1px solid gray",
              alignItems: "center",
              paddingLeft: "10px",
              paddingRight: "30px",
              boxSizing: "border-box",
            }}
          >
            <h3>Select Address : </h3>
            <AddAddressButton onClick={() => setShowAddAddressForm(true)}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
                onMouseEnter={() => lottieRef.current?.play()}
                onMouseLeave={() => lottieRef.current?.stop()}
              >
                <span>Add New Address </span>
                <Lottie
                  lottieRef={lottieRef}
                  animationData={addAddress}
                  style={{ width: 20, height: 20 }}
                  loop={false}
                  autoplay={false}
                />
              </div>
            </AddAddressButton>
          </div>
          <CartList style={{ display: "flex", height: "200px", gap: "16px" }}>
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
                    flex: "row", // 2 columns
                    boxSizing: "border-box",

                    padding: "10px",
                  }}
                  onClick={() => setSelectedAddressIndex(idx)}
                >
                  <label style={{ display: "flex", flexDirection: "row" }}>
                    <input
                      type="radio"
                      name="address"
                      checked={selectedAddressIndex === idx}
                      onChange={() => setSelectedAddressIndex(idx)}
                      style={{ marginBottom: "2px" }}
                    />
                    {addr.street}, {addr.city}, {addr.state}, {addr.zip},{" "}
                    {addr.country}
                  </label>
                </CartItem>
              ))
            ) : (
              <CartItem>No saved addresses found.</CartItem>
            )}
          </CartList>
        </UserDetailsContainer>

        <PaymentContainer>
          <SectionTitle>Payment Method</SectionTitle>
          <PaymentButtonContainer>
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
          </PaymentButtonContainer>

          <ButtonGroup>
            <BackButton onClick={() => navigate("/")}>Back to Cart</BackButton>
            <PayButton onClick={handlePayNow} disabled={loading}>
              {loading ? "Processing..." : "place order"}
            </PayButton>
          </ButtonGroup>
        </PaymentContainer>
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
