import styled from "styled-components";
// Wrapper for price and quantity to align them in the same row
export const ItemPriceQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`;

// Price for the item
export const ItemPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

// Text showing the quantity between the quantity controls
export const QuantityText = styled.div`
  font-size: 16px;
  margin: 0 10px;
  display: flex;
  align-items: center;
`;

// Buttons for increasing/decreasing the quantity
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

// Remove Button - for deleting the item
export const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 5px;
  border-radius: 3px;

  &:hover {
    background-color: #c82333;
  }
`;

// Cart Overlay - background when the cart is open
export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

// Cart Sidebar - the cart panel itself
export const CartSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease;
  z-index: 1000;
`;

// Cart Header - title and close button
export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: #ff671f;
  padding: 0px 20px;
  color: white;
`;

export const CartTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
`;

// Cart Content - where the items will be listed
export const CartContent = styled.div`
  overflow-y: auto;
  max-height: calc(100% - 100px);
  padding: 20px;
`;

// Empty Cart Image Wrapper
export const EmptyCartImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const EmptyCartImage = styled.img`
  max-width: 150px;
  max-height: 150px;
`;

// Cart Item - each product in the cart
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

// Total Section - total price and discounts
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

// Checkout Button
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
