import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Card,
  Title,
  Label,
  Input,
  Button,
  Message,
  InfoWrapper,
  Step1,
  Step1buttonWrapper,
  ContentWrapper,
  ImageTitleWrapper,
  CheckboxWrapper,
} from "./styledComponents";

export default function AccountDeletionPage() {
  const [step, setStep] = useState(1); // 1=confirm, 2=reason, 3=email/otp
  const [reason, setReason] = useState("");
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [readInfo, setReadInfo] = useState(false);

  const navigate = useNavigate();

  // Step 3: Send OTP
  const sendOtp = async () => {
    try {
      const res = await fetch(
        "https://magictreebackend.onrender.com/user/request-delete-user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, reason }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setOtpSent(true); // trigger OTP input
        setMessage("OTP sent to your email. Please check your inbox.");
      } else {
        setMessage(data.error || "Failed to send OTP.");
      }
    } catch (err) {
      setMessage("Server error. Please try again.");
    }
  };

  // Step 3: Confirm deletion
  const confirmDeletion = async () => {
    try {
      const res = await fetch("/api/confirm-deletion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, reason }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(
          "✅ Account deletion scheduled. Your data will be permanently deleted after 90 days."
        );
      } else {
        setMessage(data.error || "OTP verification failed.");
      }
    } catch {
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <Wrapper>
      <Card>
        <InfoWrapper>
          <h1>Please read before deleting your account</h1>
          <ul>
            <li>
              When you request account deletion, the following data will be
              erased: your personal information including name, email, phone
              number, and saved addresses; your order history, cart items,
              wishlist, and any preferences linked to your account; and your
              login access itself, meaning you will no longer be able to sign
              in.
            </li>
            <li>
              At the same time, certain information will not be deleted. Your
              completed transactions and payment records will remain intact
              since they are required for legal, financial, and audit purposes.
              Similarly, invoices, tax receipts, and payment confirmations will
              be preserved for compliance. Minimal system logs and technical
              data will also be retained to ensure fraud prevention and platform
              security.
            </li>
            <li>
              Ongoing orders will not be affected by this process. If you have
              placed an order that is still in transit, it will continue to be
              processed and delivered as scheduled, even if your account
              deletion is confirmed.
            </li>
            <li>
              The deletion process works as follows: once confirmed, your
              account will be scheduled for removal after 90 days. During this
              waiting period, your account will be inactive and inaccessible. If
              you change your mind during this time, you can contact our support
              team to restore your account before the 90 days are complete.
            </li>
            <li>
              Finally, please note that after the 90-day period ends, all your
              account-related data will be permanently and irreversibly deleted.
              Once this happens, recovery will not be possible, and you will
              lose access to all services associated with your account.
            </li>
          </ul>
        </InfoWrapper>
        <ContentWrapper>
          <ImageTitleWrapper>
            <img src="/logof.jpg" alt="Logo" style={{ height: "100px" }} />
            <Title>Account Deletion</Title>
          </ImageTitleWrapper>

          {step === 1 && (
            <Step1>
              <Message>
                Are you sure you want to delete your account? This action cannot
                be undone.
              </Message>
              <Step1buttonWrapper>
                <Button onClick={() => setStep(2)}>Yes, Delete</Button>
                <Button
                  onClick={() => navigate("/")}
                  style={{ backgroundColor: "#6b7280" }}
                >
                  No, Keep Account
                </Button>
              </Step1buttonWrapper>
            </Step1>
          )}

          {step === 2 && !otpSent && (
            <>
              <Label>Email Address</Label>
              <Input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Label>Reason for deleting account</Label>
              <Input
                type="text"
                placeholder="Reason for deletion"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />

              <CheckboxWrapper>
                <input
                  type="checkbox"
                  checked={readInfo}
                  onChange={(e) => setReadInfo(e.target.checked)}
                />
                <span>I have read and understood all the information</span>
              </CheckboxWrapper>

              <Button
                disabled={!email.trim() || !reason.trim() || !readInfo}
                onClick={async () => sendOtp()}
              >
                Continue
              </Button>
            </>
          )}

          {/* OTP input form */}
          {otpSent && (
            <>
              <Label>Enter OTP</Label>
              <Input
                type="text"
                placeholder="Enter the OTP from your email"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <Button disabled={!otp.trim()} onClick={confirmDeletion}>
                Confirm Deletion
              </Button>
            </>
          )}

          {message && <Message>{message}</Message>}
        </ContentWrapper>
      </Card>
    </Wrapper>
  );
}
