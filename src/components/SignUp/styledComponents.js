import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #eef1f4;
`;

export const SignUpForm = styled.form`
  background-color: white;
  padding: 2.5rem 3rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
`;

export const Label = styled.label`
  display: block;
  margin: 0.75rem 0 0.25rem;
  color: #333;
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
    border-color: #3498db;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 1rem;
`;
