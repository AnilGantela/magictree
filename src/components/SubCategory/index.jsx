import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  SubcategoryContainer,
  Sidebar,
  FilterTitle,
  SortButton,
  ContentArea,
  Banner,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductTitle,
  StrikePrice,
  ProductPrice,
  DiscountBadge,
  PriceAndRatingRow,
  AverageRating,
  EmptyCartImageWrapper,
  EmptyCartImage,
} from "./styledComponents";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SubcategoryPage = () => {
  const { subcategory } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `https://magictreebackend.onrender.com/products/subcategory/${subcategory}`
        );
        setProducts(data.products || []);
        setFilteredProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [subcategory]);

  useEffect(() => {
    let sorted = [...products];

    // Sort based on selected option
    switch (sortOption) {
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "discount-high":
        sorted.sort((a, b) => b.discount - a.discount);
        break;
      case "rating-high":
        sorted.sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0));
        break;
      default:
        break;
    }

    // Filter by search query
    if (searchQuery.trim()) {
      sorted = sorted.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(sorted);
  }, [sortOption, products, searchQuery]);

  return (
    <SubcategoryContainer>
      <Sidebar>
        <FilterTitle>Search</FilterTitle>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            width: "100%",
            outline: "none",
          }}
        />

        <FilterTitle>Sort By</FilterTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <SortButton
            selected={sortOption === "name-asc"}
            onClick={() => setSortOption("name-asc")}
          >
            Name: A-Z
          </SortButton>
          <SortButton
            selected={sortOption === "name-desc"}
            onClick={() => setSortOption("name-desc")}
          >
            Name: Z-A
          </SortButton>
          <SortButton
            selected={sortOption === "price-low"}
            onClick={() => setSortOption("price-low")}
          >
            Price: Low to High
          </SortButton>
          <SortButton
            selected={sortOption === "price-high"}
            onClick={() => setSortOption("price-high")}
          >
            Price: High to Low
          </SortButton>
          <SortButton
            selected={sortOption === "discount-high"}
            onClick={() => setSortOption("discount-high")}
          >
            Discount: High to Low
          </SortButton>
          <SortButton
            selected={sortOption === "rating-high"}
            onClick={() => setSortOption("rating-high")}
          >
            Rating: High to Low
          </SortButton>
        </div>
      </Sidebar>

      <ContentArea>
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

        <ProductsGrid>
          {filteredProducts.length === 0 ? (
            <EmptyCartImageWrapper>
              <EmptyCartImage src="/noproducts.png" alt="no-products" />
            </EmptyCartImageWrapper>
          ) : (
            filteredProducts.map((product) => {
              const discountedPrice = Math.round(
                product.price - (product.price * product.discount) / 100
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
            })
          )}
        </ProductsGrid>
      </ContentArea>
    </SubcategoryContainer>
  );
};

export default SubcategoryPage;
