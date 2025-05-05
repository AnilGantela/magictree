import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const res = await axios.get(
          `https://magictreebackend.onrender.com/products/${id}`
        );
        setProduct(res.data.product);
        setMainImage(res.data.product.images[0]);
        setReviews(res.data.reviews);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProduct();
  }, [id]);

  const changeImage = (src) => setMainImage(src);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(Cookies.get("cart") || "[]");

    // Check if product is already in cart
    const existingProductIndex = existingCart.findIndex(
      (item) => item._id === product._id // Compare by product _id
    );

    if (existingProductIndex >= 0) {
      // Product is already in cart, update its quantity
      existingCart[existingProductIndex].quantity += 1;
    } else {
      // Product not in cart, add it with quantity 1
      const newItem = {
        _id: product._id, // Store the product ID
        name: product.name,
        price: product.price,
        discount: product.discount,
        image: product.images[0],
        quantity: 1, // Set quantity to 1
      };
      existingCart.push(newItem);
    }

    // Save the updated cart to cookies
    Cookies.set("cart", JSON.stringify(existingCart), { expires: 7 });
    alert("Added to cart!");
  };

  if (loading) return <Container>Loading...</Container>; // Show loading state

  if (!product) return <Container>Product not found</Container>; // Error state if product not found

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <Container>
      <ProductContainer>
        <ImagesSection>
          <MainImage src={mainImage} alt="Main" />
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
        </ImagesSection>

        <DetailsSection>
          <ProductName>{product.name}</ProductName>
          <TextLine>
            <strong>Category:</strong> {product.category}
          </TextLine>
          {product.subcategories?.length > 0 && (
            <TextLine>
              <strong>Subcategories:</strong> {product.subcategories.join(", ")}
            </TextLine>
          )}
          <TextLine>
            <RatingStar>⭐</RatingStar> {product.averageRating}/5
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
          <AddToCartButton onClick={handleAddToCart}>
            Add to Cart
          </AddToCartButton>

          {reviews.length > 0 && (
            <ReviewSection>
              <h3>Customer Reviews</h3>
              {reviews.map((review) => (
                <ReviewItem key={review._id}>
                  <strong>{review.user.name}</strong> - ⭐{review.rating}/5
                  <p>{review.comment}</p>
                </ReviewItem>
              ))}
            </ReviewSection>
          )}
        </DetailsSection>
      </ProductContainer>
    </Container>
  );
};

export default ProductPage;
