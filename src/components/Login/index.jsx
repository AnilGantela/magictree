import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { LinearGradient } from "react-text-gradients";
import * as S from "./styledComponents";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || "/";

  useEffect(() => {
    const token = Cookies.get("magicTreeToken");
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://magictreebackend.onrender.com/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      Cookies.set("magicTreeToken", data.token, { expires: 7, path: "/" });
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.GradientForm>
        <S.FormContent onSubmit={handleSubmit}>
          <S.HeaderSection>
            <LinearGradient gradient={["to right", "#6d1a0b, #e34c26"]}>
              <S.Title>Welcome Back</S.Title>
            </LinearGradient>
            <S.Subtitle>Login to your Magic Tree account</S.Subtitle>
          </S.HeaderSection>

          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

          <S.InputGroup>
            <S.Label htmlFor="email">Email Address</S.Label>
            <S.StyledInput
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label htmlFor="password">Password</S.Label>
            <S.StyledInput
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <S.ForgotLink to="/">Go Home</S.ForgotLink>
              <S.ForgotLink to="/forgot-password">
                Forgot Password?
              </S.ForgotLink>
            </div>
          </S.InputGroup>

          <S.SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? (
              <S.LoadingSpinner />
            ) : (
              <LinearGradient gradient={["to right", "#ffffff, #f0f0f0"]}>
                Sign In
              </LinearGradient>
            )}
          </S.SubmitButton>

          <S.Footer>
            Don't have an account?{" "}
            <S.SignUpLink to="/signup">Create Account</S.SignUpLink>
          </S.Footer>
        </S.FormContent>
      </S.GradientForm>
    </S.Container>
  );
};

export default Login;
