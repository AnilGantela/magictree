import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import {
  SignUpContainer,
  SignUpForm,
  Input,
  Label,
  Button,
  ErrorMessage,
  Title,
  FormRow,
  InputGroup,
  AuthLink,
  FormFooter,
} from "./styledComponents";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("magicTreeToken");
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password, phone, street, city, state, zip, country } =
      formData;

    const userPayload = {
      name,
      email,
      password,
      phone,
      addresses: [
        {
          street,
          city,
          state,
          zip,
          country,
          isDefault: true,
        },
      ],
    };

    try {
      const response = await fetch(
        "https://magictreebackend.onrender.com/user/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userPayload),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Sign up failed");

      Cookies.set("magicTreeToken", data.token, { expires: 7, path: "/" });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <Title>Create Your Account</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <FormRow>
          <InputGroup>
            <Label>Full Name</Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </InputGroup>
        </FormRow>

        <FormRow>
          <InputGroup>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </InputGroup>
          <InputGroup>
            <Label>Phone</Label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1234567890"
            />
          </InputGroup>
        </FormRow>

        <FormRow>
          <InputGroup>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
            />
          </InputGroup>
        </FormRow>

        <FormRow>
          <InputGroup>
            <Label>Street Address</Label>
            <Input
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
              placeholder="123 Main St"
            />
          </InputGroup>
        </FormRow>

        <FormRow>
          <InputGroup>
            <Label>City</Label>
            <Input
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="New York"
            />
          </InputGroup>
          <InputGroup>
            <Label>State/Province</Label>
            <Input
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              placeholder="NY"
            />
          </InputGroup>
        </FormRow>

        <FormRow>
          <InputGroup>
            <Label>ZIP/Postal Code</Label>
            <Input
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
              placeholder="10001"
            />
          </InputGroup>
          <InputGroup>
            <Label>Country</Label>
            <Input
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              placeholder="United States"
            />
          </InputGroup>
        </FormRow>

        <Button type="submit">Create Account</Button>

        <FormFooter>
          Already have an account? <AuthLink to="/login">Log in</AuthLink>
        </FormFooter>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
