import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = Cookies.get("magicTreeToken");
      if (!token) return;

      try {
        const response = await axios.get(
          "https://magictreebackend.onrender.com/order/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const filteredOrders = response.data
          .filter((order) => order.payment && order.payment.status)
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        setOrders(filteredOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <Container>Loading...</Container>;

  return (
    <Container>
      <Title>My Orders</Title>
      {orders.length === 0 ? (
        <Message>No orders found.</Message>
      ) : (
        orders.map((order) => (
          <OrderCard key={order._id}>
            <OrderHeader>
              <span>Order ID: {order._id}</span>
              <Status status={order.status}>{order.status}</Status>
            </OrderHeader>
            <OrderDetails>
              <p>
                <strong>Order Date:</strong>{" "}
                {new Date(order.createdAt).toLocaleString()}
              </p>
              <p>
                <strong>Shipping Name:</strong> {order.shippingName}
              </p>
              <p>
                <strong>Phone:</strong> {order.phoneNumber}
              </p>
              <p>
                <strong>Address:</strong> {order.shippingAddress}
              </p>
              <p>
                <strong>Total:</strong> ₹{order.totalAmount.toFixed(2) / 100}
              </p>
              {order.payment && (
                <p>
                  <strong>Payment:</strong> {order.payment.method} (
                  {order.payment.status})
                </p>
              )}
              <ProductList>
                {order.products.map((item) => (
                  <Product key={item._id}>
                    <img src={item.product.images[0]} alt={item.product.name} />
                    <div>
                      <h4>{item.product.name}</h4>
                      <p>Qty: {item.quantity}</p>
                      <p>₹{item.product.price}</p>
                    </div>
                  </Product>
                ))}
              </ProductList>
            </OrderDetails>
          </OrderCard>
        ))
      )}
    </Container>
  );
};

export default Orders;

// ------------------ Styled Components ------------------

const Container = styled.div`
  font-family: "Arial", sans-serif;
  height: 90vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #222;
`;

const Message = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const OrderCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: #f9f9f9;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Status = styled.span`
  padding: 0.25rem 0.6rem;
  border-radius: 5px;
  font-size: 0.9rem;
  background-color: ${({ status }) =>
    status === "Pending" ? "#ffecb3" : "#c8e6c9"};
  color: ${({ status }) => (status === "Pending" ? "#ff9800" : "#388e3c")};
`;

const OrderDetails = styled.div`
  font-size: 0.95rem;
  color: #333;

  p {
    margin: 0.3rem 0;
  }
`;

const ProductList = styled.div`
  margin-top: 1rem;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin-right: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  h4 {
    margin: 0 0 0.2rem;
    font-size: 1rem;
  }

  p {
    margin: 0.1rem 0;
    font-size: 0.9rem;
  }
`;
