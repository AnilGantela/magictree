import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Subcategory from "./components/SubCategory";
import Product from "./components/Product";
import PaymentPage from "./components/Payment";
import Footer from "./components/Footer";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <>
      <Navbar onCartClick={toggleCart} />
      <Cart isOpen={isCartOpen} onToggle={toggleCart} />
      <div style={{ paddingTop: "9vh" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/:mainCategory/:subcategory" element={<Subcategory />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/:productId" element={<Checkout />} />
          <Route path="/industrial" element={<Subcategory />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
