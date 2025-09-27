// styledComponents.js
import styled from "styled-components";

export const Wrapper = styled.div`
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

export const Card = styled.div`
  width: 80vw;
  padding: 2rem;
  background: #fff;
  border-radius: 16px;
  display: flex;
  height: 80vh;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  gap: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  background: linear-gradient(
    135deg,
    hsla(20, 100%, 22%, 1) 0%,
    hsla(19, 100%, 56%, 1) 100%
  );
  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  background-color: #ffffff;
  color: #e34c26; /* Red text */
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  max-height: 500px; /* Fixed height */
  margin: 15px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  overflow-y: auto; /* Scrollable vertically */

  /* Custom scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 10px;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    text-align: center;
    color: blue;
  }

  ul {
    padding-left: 20px;
    line-height: 1.7;
    font-size: 1rem;
  }

  li {
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    height: 500px;
    width: 80%;

    h1 {
      font-size: 1.5rem;
    }

    ul {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;
    height: 350px;
    width: 100%;

    h1 {
      font-size: 1.3rem;
    }

    ul {
      font-size: 0.9rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 35%;
  background-color: #f9fafb;
  padding: 20px;
  height: 85%;
  margin: 15px auto;
  border-radius: 10px;
`;

export const ImageTitleWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Step1 = styled.div`
  text-align: center;
  padding: 20px;
  height: 60%;
  color: #374151;
  border-radius: 10px;
  background-image: url("/account-delete1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const Step1buttonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  gap: 10px;
  margin: 10px auto;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #111827;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #374151;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.25rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    border-color: #ef4444;
    outline: none;
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
  }
`;
export const CheckboxWrapper = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #dc2626; // red text
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.85rem;
  background: #ef4444;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.25s;

  &:hover {
    background: #dc2626;
  }
`;

export const Message = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
  color: #374151;
`;
