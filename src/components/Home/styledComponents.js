import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 97%;
`;

export const Banner = styled.div`
  width: 100%;
  max-height: 400px;

  .carousel .slide img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const ProductSection = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

export const ProductCard = styled.div`
  width: 180px;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
`;

export const ProductTitle = styled.h4`
  margin: 0.5rem 0 0.2rem;
`;

export const ProductPrice = styled.p`
  margin: 0;
  font-weight: bold;
  color: #ff671f;
`;
