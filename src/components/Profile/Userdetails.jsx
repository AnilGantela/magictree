import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import {
  Title,
  InfoRow,
  Label,
  Value,
  UserDetailsTitleRow,
  UserDeleteButton,
  UserDetailsBlock,

  // popup styled components
  PopupOverlay,
  PopupBox,
  PopupTitle,
  PopupTextarea,
  PopupInput,
  PopupButtonRow,
  CancelButton,
  ConfirmButton,
} from "./styledComponents";

const UserDetails = () => {
  const [user, setUser] = useState(null);

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showOtpPopup, setShowOtpPopup] = useState(false);

  const [reason, setReason] = useState("");
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("magicTreeToken");

    if (!token) return navigate("/login");

    const fetchUser = async () => {
      try {
        const res = await fetch(
          "https://magictreebackend.onrender.com/user/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await res.json();

        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, [navigate]);

  // send otp
  const handleUserDelete = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://magictreebackend.onrender.com/user/request-delete-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: user.email,
            reason,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      alert("OTP sent to your email");

      setShowDeletePopup(false);
      setShowOtpPopup(true);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // verify otp
  const verifyOtpDelete = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://magictreebackend.onrender.com/user/verify-delete-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: user.email,
            otp,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      alert("Account scheduled for deletion in 90 days");

      Cookies.remove("magicTreeToken");

      navigate("/login");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <UserDetailsBlock>
        <UserDetailsTitleRow>
          <Title>User Details</Title>

          <UserDeleteButton onClick={() => setShowDeletePopup(true)}>
            Delete Account
          </UserDeleteButton>
        </UserDetailsTitleRow>

        <InfoRow>
          <Label>Name:</Label>
          <Value>{user?.name}</Value>
        </InfoRow>

        <InfoRow>
          <Label>Email:</Label>
          <Value>{user?.email}</Value>
        </InfoRow>

        <InfoRow>
          <Label>Phone:</Label>
          <Value>{user?.phone}</Value>
        </InfoRow>
      </UserDetailsBlock>

      {/* delete popup */}
      {showDeletePopup && (
        <PopupOverlay>
          <PopupBox>
            <PopupTitle>Delete Account</PopupTitle>

            <PopupTextarea
              placeholder="Enter reason for deleting account..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />

            <PopupButtonRow>
              <CancelButton
                onClick={() => {
                  setShowDeletePopup(false);
                  setReason("");
                }}
              >
                Cancel
              </CancelButton>

              <ConfirmButton onClick={handleUserDelete}>
                {loading ? "Sending..." : "Send OTP"}
              </ConfirmButton>
            </PopupButtonRow>
          </PopupBox>
        </PopupOverlay>
      )}

      {/* otp popup */}
      {showOtpPopup && (
        <PopupOverlay>
          <PopupBox>
            <PopupTitle>Verify OTP</PopupTitle>

            <PopupInput
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <PopupButtonRow>
              <CancelButton
                onClick={() => {
                  setShowOtpPopup(false);
                  setOtp("");
                }}
              >
                Cancel
              </CancelButton>

              <ConfirmButton onClick={verifyOtpDelete}>
                {loading ? "Verifying..." : "Verify"}
              </ConfirmButton>
            </PopupButtonRow>
          </PopupBox>
        </PopupOverlay>
      )}
    </>
  );
};

export default UserDetails;
