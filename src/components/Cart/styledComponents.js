import styled from "styled-components";

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: ${(props) => (props.isOpen ? "70vh" : "60px")};
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const CartSidebar = styled.div`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  height: ${(props) => (props.$isOpen ? "70vh" : "50px")};
  transform: translateY(
    ${(props) => (props.$isOpen ? "0" : "calc(100% - 50px)")}
  );
  position: fixed;
  bottom: 0;
  right: 0;
  width: 350px;
  background: white;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: green;
  padding: 0px 20px;
  color: white;
  height: 50px;
  cursor: pointer;
`;

export const CartTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
`;

export const CartContent = styled.div`
  overflow-y: auto;
  padding: 20px;
  flex-grow: 1;
`;

export const EmptyCartImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const EmptyCartImage = styled.img`
  max-width: 150px;
  max-height: 150px;
`;

export const CartItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
`;

export const ItemDetails = styled.div`
  flex-grow: 1;
  padding: 10px 0;
`;

export const ItemTitle = styled.h4`
  font-size: 16px;
  margin: 0;
`;

export const ItemPriceQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`;

export const ItemPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

export const QuantityText = styled.div`
  font-size: 16px;
  margin: 0 10px;
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 3px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 20px;
`;

export const TotalLabel = styled.span`
  font-weight: bold;
`;

export const TotalValue = styled.span`
  font-weight: bold;
  color: #333;
`;

export const CheckoutButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 15px 20px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;
export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  margin-left: auto;
  padding: 4px;

  &:hover {
    color: red;
  }
`;
