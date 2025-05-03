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
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const [groupedProducts, setGroupedProducts] = useState({});

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
    // Load the existing cart from cookies into a variable
    const existingCart = Cookies.get("cart");
    let cart = existingCart ? JSON.parse(existingCart) : [];

    console.log("🛒 Product to add:", product);
    console.log("📦 Existing cart:", cart);

    // Extract only necessary fields from the product
    const productToAdd = {
      _id: product._id,
      name: product.name,
      image: product.images?.[0] || "", // Take the first image URL
      price: product.price,
      discount: product.discount || 0, // If no discount, set to 0
      quantity: 1,
    };

    // Check if the product already exists in the cart
    const index = cart.findIndex((item) => item._id === product._id);

    // If product exists, increase the quantity
    if (index !== -1) {
      cart[index].quantity += 1;
      console.log("🔁 Increased quantity of", product.name);
    } else {
      // If product doesn't exist, add it to the cart
      cart.push(productToAdd);
      console.log("✨ Added new product:", product.name);
    }

    // Remove the old cart from cookies
    Cookies.remove("cart");

    // Save the updated cart in the cookies
    Cookies.set("cart", JSON.stringify(cart), { expires: 7, path: "/" });

    console.log("✅ Updated cart saved in cookies:", cart);
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
