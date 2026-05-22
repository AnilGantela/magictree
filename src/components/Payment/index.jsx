import React, { useEffect, useRef } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

import Cookies from "js-cookie";

import Loader from "../Loader";

const PaymentPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const paymentOpened = useRef(false);

  const token = Cookies.get("magicTreeToken");

  const {
    razorpayOrderId,
    razorpayKeyId,
    amount,
    currency,
    name,
    phone,
    email,
  } = location.state || {};

  useEffect(() => {
    if (!razorpayOrderId || !razorpayKeyId || !amount) {
      navigate("/checkout");

      return;
    }
  }, [razorpayOrderId, razorpayKeyId, amount, navigate]);

  useEffect(() => {
    if (paymentOpened.current) return;

    paymentOpened.current = true;

    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");

      navigate("/checkout");

      return;
    }

    let paymentCompleted = false;

    const options = {
      key: razorpayKeyId,

      amount,

      currency,

      name: "Magic Tree",

      description: "Order Payment",

      order_id: razorpayOrderId,

      prefill: {
        name: name || "",

        email: email || "",

        contact: phone || "",
      },

      theme: {
        color: "#06038d",
      },

      handler: async (response) => {
        try {
          paymentCompleted = true;

          const verifyResponse = await axios.post(
            "https://magictreebackend.onrender.com/payments/verify",
            {
              razorpayOrderId: response.razorpay_order_id,

              razorpayPaymentId: response.razorpay_payment_id,

              razorpaySignature: response.razorpay_signature,
            },

            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );

          if (verifyResponse.data.success) {
            navigate("/profile/orders");
          } else {
            alert("Payment verification failed");

            navigate("/checkout");
          }
        } catch (error) {
          console.error(error);

          navigate("/checkout");
        }
      },

      modal: {
        escape: true,

        backdropclose: true,

        confirm_close: true,

        animation: true,

        ondismiss: function () {
          alert("PAYMENT CLOSED Redirecting to home");

          if (!paymentCompleted) {
            window.location.href = "/";
          }
        },
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.on("payment.failed", function (response) {
      console.error(response);
      console.log(window.location.history);
      alert(response.error?.description || "Payment Failed");

      window.location.href = "/checkout";
    });

    razorpay.open();
  }, [
    razorpayOrderId,
    razorpayKeyId,
    amount,
    currency,
    name,
    phone,
    email,
    token,
    navigate,
  ]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader color="orange" />
    </div>
  );
};

export default PaymentPage;
