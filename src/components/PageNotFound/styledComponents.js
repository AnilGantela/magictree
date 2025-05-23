import styled from "styled-components";

// Main container to center the content
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90.5vh;
  text-align: center;
`;

// Image container with increased size
export const Image = styled.img`
  width: 400px; // Increased size
  height: auto;
  margin-bottom: 30px;
  color: #fff;
`;

// Text container
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Title (Heading)
export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

// Description text
export const Description = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
`;

// Button to go back to the home page
export const HomeButton = styled.button`
  padding: 10px 20px;
  background-color: green;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
