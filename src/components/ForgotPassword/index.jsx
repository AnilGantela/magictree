import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";
import {
  Container,
  GradientForm,
  FormContent,
  HeaderSection,
  Title,
  Subtitle,
  InputGroup,
  Label,
  StyledInput,
  StyledInput2,
  SubmitButton,
  LoadingSpinner,
  ErrorMessage,
  Footer,
  SignUpLink,
  PasswordInputContainer,
} from "./styledComponents";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      await axios.post("https://magictreebackend.onrender.com/user/send-otp", {
        email,
      });
      setOtpSent(true);
    } catch (err) {
      const message = err.response?.data?.message || "Failed to send OTP.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleVerifyOtpAndReset = async () => {
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (otp.length !== 6) {
      setError("OTP must be 6 digits.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      await axios.post(
        "https://magictreebackend.onrender.com/user/reset-password",
        { email, otp, newPassword }
      );
      alert("Password reset successful!");
      navigate("/login");
    } catch (err) {
      const message =
        err.response?.data?.message || "Failed to reset password.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <GradientForm>
        <FormContent>
          <HeaderSection>
            <Title>Reset Password</Title>
            <Subtitle>
              {otpSent
                ? "Enter the OTP sent to your email and your new password"
                : "Enter your email to receive a password reset OTP"}
            </Subtitle>
          </HeaderSection>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          {!otpSent ? (
            <>
              <InputGroup>
                <Label>Email Address</Label>
                <StyledInput
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                />
              </InputGroup>

              <SubmitButton
                onClick={handleSendOtp}
                disabled={submitting || !email}
              >
                {submitting ? <LoadingSpinner /> : "Send OTP"}
              </SubmitButton>
            </>
          ) : (
            <>
              <InputGroup>
                <Label>New Password</Label>
                <PasswordInputContainer style={{ position: "relative" }}>
                  <StyledInput2
                    type={showPassword ? "text" : "password"}
                    placeholder={showPassword ? "Hello" : "••••••••"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button
                    type="button" // <-- Add this line
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#666",
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </PasswordInputContainer>
              </InputGroup>

              <InputGroup>
                <Label>Confirm Password</Label>
                <StyledInput
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </InputGroup>

              <InputGroup>
                <Label>OTP Code</Label>
                <StyledInput
                  type="text"
                  placeholder="123456"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={{ letterSpacing: "5px", textAlign: "center" }}
                />
              </InputGroup>

              <SubmitButton
                onClick={handleVerifyOtpAndReset}
                disabled={submitting}
              >
                {submitting ? <LoadingSpinner /> : "Reset Password"}
              </SubmitButton>
            </>
          )}

          <Footer>
            Remember your password?{" "}
            <SignUpLink to="/login">Sign in instead</SignUpLink>
          </Footer>
        </FormContent>
      </GradientForm>
    </Container>
  );
};

export default ForgotPassword;
