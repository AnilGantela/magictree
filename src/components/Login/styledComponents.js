import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterText = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  color: #555;
`;

export const LinkButton = styled(Link)`
  color: #3498db;
  font-weight: 600;
  text-decoration: none;
  margin-left: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

export const LoginForm = styled.form`
  background-color: white;
  padding: 2rem 3rem;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  margin: 0.75rem 0 0.25rem;
  color: #555;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.7rem;
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #43a047;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 1rem;
`;
