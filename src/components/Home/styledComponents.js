import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 99%;
  margin: 10px auto;
`;

export const Banner = styled.div`
  width: 100%;
  height: 400px;
  border: 2px solid #ccc;

  .carousel .slide img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

export const ProductSection = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0 1rem;
  margin-top: 1rem;
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

export const CategoryTitle = styled.h2`
  font-size: 24px;
  margin: 20px 0 10px 10px;
  color: #06038d;
`;
