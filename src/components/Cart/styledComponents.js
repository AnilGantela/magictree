import styled from "styled-components";

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

export const CartSidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-400px")};
  height: 100vh;
  width: 350px;
  background-color: #ffffff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.15);
  transition: right 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ff671f;
  border-bottom: 1px solid #ddd;
`;

export const CartTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0;
  color: #ffffff;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffffff;
`;

export const CartContent = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
`;

export const EmptyCartImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const EmptyCartImage = styled.img`
  max-width: 80%;
  opacity: 0.7;
`;

export const CartItem = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #f8f8f8;
  border-radius: 8px;
`;

export const ItemTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
`;

export const ItemPrice = styled.p`
  margin: 0;
  color: #555;
  font-size: 0.95rem;
`;
