import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const PaymentPage = () => {
  const location = useLocation(); // Get location object using useLocation
  const navigate = useNavigate(); // Get navigate function to navigate to different routes
  const { razorpayOrderId, razorpayKeyId, amount, currency, name, phone } =
    location.state || {}; // Destructure orderId and amount from location.state
  const token = Cookies.get("magicTreeToken");
  // Check if the required properties are missing
  if (!razorpayOrderId || !amount || !razorpayKeyId) {
    return <div>Error: Missing payment details.</div>;
  }

  useEffect(() => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please refresh the page.");
      return;
    }

    const options = {
      key: razorpayKeyId,
      amount: (amount * 100).toString(), // Convert to paise
      currency,
      name: "Magic Tree",
      description: "Order Payment",
      order_id: razorpayOrderId,
      handler: async (response) => {
        try {
          const verifyRes = await axios.post(
            "https://magictreebackend.onrender.com/payment/verify",
            {
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          console.log(verifyRes.data);
          if (verifyRes.data.success) {
            alert("Payment successful!");
            navigate("/orders"); // Navigate to orders page on success
          } else {
            alert("Payment verification failed.");
            navigate(-1); // Go back to previous page if verification fails
          }
        } catch (err) {
          console.error("Verification error:", err);
          alert("Payment verification failed.");
          navigate(-1); // Go back to previous page if error occurs
        }
      },
      prefill: { name, contact: phone },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);

    // Ensure we are setting up the events for payment failure and cancellation correctly
    rzp.on("payment.failed", function (response) {
      console.error("Payment failed:", response);
      alert("Payment failed. Please try again.");
      navigate(-1); // Go back to the previous page on failure
    });

    rzp.on("payment.cancelled", function () {
      console.log("Payment cancelled.");
      alert("Payment cancelled. Returning to the previous page.");
      navigate(-1); // Go back to the previous page on cancellation
    });

    rzp.open(); // Open the Razorpay modal
  }, [razorpayOrderId, razorpayKeyId, amount, currency, navigate]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h1>Processing payment...</h1>
    </div>
  );
};

export default PaymentPage;
