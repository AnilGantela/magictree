import React, { useEffect, useState } from "react";
import {
  HomeContainer,
  Banner,
  ProductSection,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from "./styledComponents";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock dynamic product loading
    const fetchProducts = async () => {
      const data = [
        { id: 1, name: "Phone", price: 499, image: "/images/phone.jpg" },
        {
          id: 2,
          name: "Headphones",
          price: 199,
          image: "/images/headphones.jpg",
        },
        { id: 3, name: "Laptop", price: 999, image: "/images/laptop.jpg" },
      ];
      setProducts(data);
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
          dynamicHeight={false}
        >
          <div>
            <img src="/images/banner1.jpg" alt="Banner 1" />
          </div>
          <div>
            <img src="/images/banner2.jpg" alt="Banner 2" />
          </div>
          <div>
            <img src="/images/banner3.jpg" alt="Banner 3" />
          </div>
        </Carousel>
      </Banner>

      <ProductSection>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductCard>
        ))}
      </ProductSection>
    </HomeContainer>
  );
};

export default Home;
