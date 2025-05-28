import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    to right,
    hsla(151, 93%, 22%, 1) 0%,
    hsla(151, 97%, 12%, 1) 100%
  );
  padding: 1.5rem 1rem 0rem 1rem;
  box-sizing: border-box;
`;

export const SignUpForm = styled.form`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 650px;
  max-height: 99vh;
  overflow-y: auto;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  &:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }

  @media (max-height: 800px) {
    padding: 1.5rem;
    max-height: 90vh;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0 0 1.5rem 0;
  color: transparent;
  background: linear-gradient(
    135deg,
    hsla(20, 100%, 22%, 1) 0%,
    hsla(19, 100%, 56%, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const Label = styled.label`
  display: block;
  margin: 0.5rem 0 0.25rem;
  color: #444;
  font-weight: 500;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  box-sizing: border-box;
  transition: all 0.2s ease;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: #e34c26;
    box-shadow: 0 0 0 2px rgba(227, 76, 38, 0.2);
  }

  &::placeholder {
    color: #aaa;
    opacity: 0.7;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: linear-gradient(
    135deg,
    hsla(20, 100%, 22%, 1) 0%,
    hsla(19, 100%, 56%, 1) 100%
  );
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 1.5rem 0;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(227, 76, 38, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.p`
  color: #d32f2f;
  text-align: center;
  margin: 0 0 1rem 0;
  padding: 0.75rem;
  background-color: #ffebee;
  border-radius: 8px;
  font-size: 0.9rem;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const InputGroup = styled.div`
  flex: 1;
  min-width: 0;
`;

export const AuthLink = styled(Link)`
  color: #e34c26;
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.3rem;
  transition: all 0.2s ease;

  &:hover {
    color: #c44121;
    text-decoration: underline;
  }
`;

export const FormFooter = styled.div`
  text-align: center;
  color: #666;
  font-size: 0.95rem;
  margin-top: -0.5rem;
  padding-bottom: 0.5rem;
`;
