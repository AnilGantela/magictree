import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    to right,
    hsla(151, 93%, 22%, 1) 0%,
    hsla(151, 97%, 12%, 1) 100%
  );
`;

export const GradientForm = styled.div`
  width: 100%;
  max-width: 480px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    135deg,
    hsla(20, 100%, 22%, 1) 0%,
    hsla(19, 100%, 56%, 1) 100%
  );
`;

export const FormContent = styled.form`
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: transparent;
  background: linear-gradient(
    to right,
    hsla(151, 93%, 22%, 1) 0%,
    hsla(151, 97%, 12%, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-top: 8px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #444;
`;

export const StyledInput = styled.input`
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: #e34c26;
    box-shadow: 0 0 0 2px rgba(227, 76, 38, 0.2);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const ForgotLink = styled(Link)`
  align-self: flex-end;
  font-size: 0.8rem;
  color: #e34c26;
  text-decoration: none;
  margin-top: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button`
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(
    135deg,
    hsla(20, 100%, 22%, 1) 0%,
    hsla(19, 100%, 56%, 1) 100%
  );
  color: white;
  margin-top: 8px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(227, 76, 38, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const LoadingSpinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 3px solid white;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorMessage = styled.div`
  padding: 12px;
  background-color: #ffebee;
  color: #d32f2f;
  border-radius: 8px;
  font-size: 0.9rem;
  text-align: center;
`;

export const Footer = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  margin-top: 16px;
`;

export const SignUpLink = styled(Link)`
  color: #e34c26;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PasswordInputContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: #e34c26;
    box-shadow: 0 0 0 2px rgba(227, 76, 38, 0.2);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const StyledInput2 = styled.input`
  padding: 14px 16px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #fff;
  flex-grow: 1;
  width: 90%;

  &:focus {
    outline: none;
    border-color: #e34c26;
    box-shadow: 0 0 0 2px rgba(227, 76, 38, 0.2);
  }

  &::placeholder {
    color: #aaa;
  }
`;
