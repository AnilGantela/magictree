import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background: linear-gradient(to right, #fffbe6, #e6fff2);
  font-family: "Inter", sans-serif;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImagesSection = styled.div`
  flex: 1 1 40%;
  min-width: 300px;
`;

export const MainImage = styled.img`
  width: 100%;
  border-radius: 12px;
  border: 2px solid #565656;
`;

export const ThumbnailRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  flex-wrap: wrap;
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
  flex: 1 1 55%;
  padding: 25px;
  border-radius: 12px;
  background-color: #fffdd0;
  text-align: left;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
`;

export const ProductName = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #0011a8;
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
