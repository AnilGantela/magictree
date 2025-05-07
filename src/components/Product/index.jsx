// ProductPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import {
  Container,
  ProductContainer,
  ImagesSection,
  MainImage,
  ThumbnailRow,
  Thumbnail,
  DetailsSection,
  ProductName,
  TextLine,
  Price,
  OriginalPrice,
  DiscountInfo,
  Description,
  AddToCartButton,
  ReviewSection,
  ReviewItem,
  RatingStar,
} from "./styledComponents";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isInCart, setIsInCart] = useState(false); // State to track if product is in cart

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://magictreebackend.onrender.com/products/${id}`
        );
        setProduct(res.data.product);
        setMainImage(res.data.product.images[0]);
        setReviews(res.data.reviews);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const checkProductInCart = async () => {
      try {
        const token = Cookies.get("magicTreeToken");
        if (!token) return;

        const res = await axios.get(
          "https://magictreebackend.onrender.com/cart/items",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Check if the product is already in the cart
        const isProductInCart = res.data.items.some(
          (item) => item.productId === product._id
        );
        setIsInCart(isProductInCart);
      } catch (err) {
        console.error("Error fetching cart items:", err);
      }
    };

    if (product) {
      checkProductInCart();
    }
  }, [product]);

  const changeImage = (src) => setMainImage(src);

  const handleAddToCart = async () => {
    try {
      const token = Cookies.get("magicTreeToken");
      if (!token) {
        alert("Please log in to add products to your cart.");
        navigate("/login", { state: { from: window.location.pathname } });
        return;
      }

      const res = await axios.post(
        "https://magictreebackend.onrender.com/cart/add",
        {
          product: {
            productId: product._id,
            name: product.name,
            price: product.price,
            discount: product.discount,
            image: product.images[0],
            quantity: 1,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        alert("Added to cart!");
        setIsInCart(true); // Update state to disable the button
      } else {
        alert("Failed to add to cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Error adding to cart.");
    }
  };

  const handleBuyNow = () => {
    navigate(`/checkout/${product._id}`);
  };

  if (loading) return <Container>Loading...</Container>;
  if (!product) return <Container>Product not found</Container>;

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <Container>
      <ProductContainer>
        <ImagesSection>
          <ThumbnailRow>
            {product.images.map((img, idx) => (
              <Thumbnail
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                isActive={mainImage === img}
                onClick={() => changeImage(img)}
              />
            ))}
          </ThumbnailRow>
          <MainImage src={mainImage} alt="Main" />
        </ImagesSection>

        <DetailsSection>
          <ProductName>{product.name}</ProductName>
          <TextLine>
            <strong>Category:</strong> {product.category}{" "}
            <strong>Sub-Category:</strong>{" "}
            <Link
              to={`/${product.category}/${product.subcategory}`}
              style={{ color: "#007bff", textDecoration: "underline" }}
            >
              {product.subcategory}
            </Link>
          </TextLine>

          {product.subcategories?.length > 0 && (
            <TextLine>
              <strong>Subcategories:</strong> {product.subcategories.join(", ")}
            </TextLine>
          )}

          <TextLine>
            <RatingStar>⭐</RatingStar>{" "}
            {product.averageRating === 0 ? "5" : product.averageRating}/5
          </TextLine>

          <TextLine>
            <strong>Stock:</strong>{" "}
            <span style={{ color: "#28a745" }}>
              {product.stock} units available
            </span>
          </TextLine>

          <TextLine>
            <Price>₹{discountedPrice}</Price>
            <OriginalPrice>₹{product.price}</OriginalPrice>
            <DiscountInfo>{product.discount}% OFF</DiscountInfo>
          </TextLine>

          <Description>{product.description}</Description>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <AddToCartButton onClick={handleAddToCart} disabled={isInCart}>
              {isInCart ? "Added to Cart" : "Add to Cart"}
            </AddToCartButton>
            <AddToCartButton
              onClick={handleBuyNow}
              style={{ backgroundColor: "#28a745" }}
            >
              Buy Now
            </AddToCartButton>
          </div>
        </DetailsSection>
      </ProductContainer>
      {reviews.length > 0 ? (
        <ReviewSection>
          <h3>Customer Reviews</h3>
          {reviews.map((review) => (
            <ReviewItem key={review._id}>
              <strong>{review.user.name}</strong> - ⭐{review.rating}/5
              <p>{review.comment}</p>
            </ReviewItem>
          ))}
        </ReviewSection>
      ) : (
        <ReviewSection>
          <h3>No Reviews Yet</h3>
          <p>Be the first to review this product!</p>
        </ReviewSection>
      )}
    </Container>
  );
};

export default ProductPage;
