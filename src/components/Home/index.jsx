import React, { useEffect, useState } from "react";
import {
  HomeContainer,
  Banner,
  ProductSection,
  CategoryTitle,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  StrikePrice,
  DiscountBadge,
  AverageRating,
  PriceAndCartRow,
  PriceAndRatingRow,
} from "./styledComponents";
import { Carousel } from "react-responsive-carousel";
import { useNavigate, useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const [groupedProducts, setGroupedProducts] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "https://magictreebackend.onrender.com/products/";
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) throw new Error("Failed to fetch products");

        const grouped = data.products.reduce((acc, product) => {
          const category = product.category || "Other";
          if (!acc[category]) acc[category] = [];
          acc[category].push(product);
          return acc;
        }, {});
        setGroupedProducts(grouped);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <HomeContainer>
      <Banner>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img src="/banner1.jpg" alt="Banner 1" />
          </div>
          <div>
            <img src="/banner2.webp" alt="Banner 2" />
          </div>
          <div>
            <img src="/banner3.jpg" alt="Banner 3" />
          </div>
        </Carousel>
      </Banner>

      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <ProductSection>
            {products.map((product) => {
              const discountedPrice = Math.round(
                product.price * (1 - (product.discount || 0) / 100)
              );

              return (
                <ProductCard
                  key={product._id || product.id}
                  onClick={() => navigate(`/product/${product._id}`)}
                >
                  {product.discount > 0 && (
                    <DiscountBadge>-{product.discount}%</DiscountBadge>
                  )}
                  <ProductImage
                    src={product.images?.[1] || product.images?.[0]}
                    alt={product.name}
                  />
                  <ProductTitle>{product.name}</ProductTitle>
                  <PriceAndRatingRow>
                    <div>
                      <StrikePrice>₹{product.price}</StrikePrice>
                      <ProductPrice>₹{discountedPrice}</ProductPrice>
                    </div>
                    <AverageRating>
                      ⭐ {product.averageRating || 5}
                    </AverageRating>
                  </PriceAndRatingRow>
                </ProductCard>
              );
            })}
          </ProductSection>
        </div>
      ))}
    </HomeContainer>
  );
};

export default Home;
