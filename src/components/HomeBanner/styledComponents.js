import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  max-height: 400px;
  border: 2px solid #ccc;
  margin-bottom: 50px;

  .carousel .slide img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  max-height: 380px;
  padding-top: 50px;
  margin-bottom: 100px;
`;

export const BannerContent = styled.div`
  flex: 1;
  color: white;
  max-width: 50%;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.4;
    margin: 0;
  }
  img {
    height: 80px;
    position: relative;
    left: 85%;
    top: 100px;
  }
`;

export const BannerImage = styled.div`
  width: 40%;
  img {
    width: 150%;
    margin-left: -130px;
    height: 700px;
    border-radius: 8px;
    margin-top: 50px;
  }
`;
