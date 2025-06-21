import styled from "styled-components";

export const SubcategoryContainer = styled.div`
  display: flex;
  padding: 1rem;
  height: 90vh;
`;

export const SortButton = styled.button`
  padding: 8px 12px;
  font-size: 15px;
  border-radius: 6px;
  border: 1px solid ${({ selected }) => (selected ? "#007bff" : "#ccc")};
  background-color: ${({ selected }) => (selected ? "#007bff" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#333")};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ selected }) =>
      selected ? "#0056b3" : "rgba(0, 0, 0, 0.05)"};
  }
`;

export const PriceAndRatingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  gap: 4px;
`;

export const ProductCard = styled.div`
  width: 180px;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: red;
  color: white;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`;

export const ProductTitle = styled.h4`
  margin: 0.5rem 0 0.2rem;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 2.8em;
`;

export const AverageRating = styled.div`
  font-size: 13px;
  color: #f39c12;
  margin-top: 4px;
`;

export const ProductPrice = styled.p`
  margin: 0;
  font-weight: bold;
  color: #ff671f;
  font-size: 14px;
`;
export const PriceAndCartRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  gap: 6px;
`;

export const StrikePrice = styled.span`
  text-decoration: line-through;
  color: #888;
  font-size: 12px;
  margin-right: 6px;
`;

export const Sidebar = styled.aside`
  width: 220px;
  padding: 1rem;
  border-right: 1px solid #ddd;
`;

export const FilterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 1rem;
`;

export const ContentArea = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const Banner = styled.div`
  margin-bottom: 2rem;
  img {
    max-height: 300px;
    object-fit: cover;
  }
`;

export const ProductsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
`;
export const EmptyCartImageWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border: 1px solid #ddd;
`;

export const EmptyCartImage = styled.img`
  max-width: 150px;
  max-height: 150px;
`;
export const FilterSelect = styled.select`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
`;
