import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  50% {
    transform: translateX(-10%);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  padding: 10px;
  font-family: "Inter", sans-serif;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImagesSection = styled.div`
  flex: 1 1 40%;
  min-width: 300px;
  max-width: 49%;
  display: flex;
  justify-content: space-around;
  border: 2px solid #ccc;
  height: 50vh;
  padding: 10px;
  border: 2px solid red;
  background-color: #ffffff;
`;

export const MainImage = styled.img`
  width: 80%;
  border-radius: 12px;
  height: 100%;
  object-fit: contain;
  &.slide {
    animation: ${slideIn} 0.5s ease;
  }
`;

export const ThumbnailRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
  height: 100%; /* or any desired height */
  width: 80px; /* fixed width is better than max-width for vertical bars */
  overflow-y: auto;
  overflow-x: hidden; /* prevent horizontal scroll */
`;

export const Thumbnail = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid ${(props) => (props.isActive ? "#007acc" : "#ccc")};
  cursor: pointer;
  transition: border 0.2s ease;

  &:hover {
    border-color: #007acc;
  }
`;

export const DetailsSection = styled.div`
  padding: 25px;
  width: 48%;
  text-align: left;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid red;
`;

export const ProductName = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #fff;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextLine = styled.div`
  font-size: 16px;
  margin: 12px 0;
  line-height: 1.6;
`;

export const Price = styled.span`
  font-size: 26px;
  color: #003399;
  font-weight: bold;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #888;
  margin-left: 10px;
  font-size: 18px;
`;

export const DiscountInfo = styled.span`
  font-size: 18px;
  color: #e60000;
  font-weight: 600;
  margin-left: 15px;
`;

export const Description = styled.div`
  font-size: 16px;
  margin: 12px 0;
  text-align: justify;
`;

export const AddToCartButton = styled.button`
  background: linear-gradient(to bottom, #0000ff, #3366ff);
  color: white;
  font-weight: bold;
  font-size: 18px;
  border: none;
  border-radius: 30px;
  margin: 20px 0;
  padding: 12px 40px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(to bottom, #0011e6, #66a3ff);
    transform: translateY(-2px);
  }
`;

export const ReviewSection = styled.div`
  margin-top: 25px;

  h3 {
    margin-bottom: 10px;
    font-size: 22px;
  }
`;

export const ReviewItem = styled.div`
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #ccc;
`;

export const RatingStar = styled.span`
  color: #f39c12;
  font-weight: bold;
`;
