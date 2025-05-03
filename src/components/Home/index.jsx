import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  HomeContainer,
  Banner,
  ProductSection,
  CategoryTitle,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
  PriceAndCartRow,
} from "./styledComponents";
import { Carousel } from "react-responsive-carousel";
import { useNavigate, useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const [groupedProducts, setGroupedProducts] = useState({});
  const navigate = useNavigate();
  const location = useLocation(); // get current page info

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

  const handleAddToCart = (product) => {
    // 🔐 Check for auth token
    const token = Cookies.get("magicTreeToken");

    if (!token) {
      // ⛔ Not logged in — redirect to login with return URL
      const currentPath = location.pathname + location.search;
      navigate(`/login?redirect=${encodeURIComponent(currentPath)}`);
      return;
    }

    // 🛒 Continue with cart logic
    const existingCart = Cookies.get("cart");
    let cart = existingCart ? JSON.parse(existingCart) : [];

    const productToAdd = {
      _id: product._id,
      name: product.name,
      image: product.images?.[0] || "",
      price: product.price,
      discount: product.discount || 0,
      quantity: 1,
    };

    const index = cart.findIndex((item) => item._id === product._id);

    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push(productToAdd);
    }

    Cookies.set("cart", JSON.stringify(cart), { expires: 7, path: "/" });
  };

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
            {products.map((product) => (
              <ProductCard key={product._id || product.id}>
                <ProductImage
                  src={product.images?.[1] || product.images?.[0]}
                  alt={product.name}
                />
                <ProductTitle>{product.name}</ProductTitle>
                <PriceAndCartRow>
                  <ProductPrice>₹{product.price}</ProductPrice>
                  <AddToCartButton onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </AddToCartButton>
                </PriceAndCartRow>
              </ProductCard>
            ))}
          </ProductSection>
        </div>
      ))}
    </HomeContainer>
  );
};

export default Home;
