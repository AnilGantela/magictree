import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import UserDetails from "./components/Profile/Userdetails";
import Orders from "./components/Profile/Orders";
import PurchasedProducts from "./components/Profile/PurchasedProducts";
import ForgotPassword from "./components/ForgotPassword";

function Layout({ children }) {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  // Routes where we want to hide Navbar, Cart, and Footer
  const hideLayoutRoutes = [
    "/login",
    "/signup",
    "/forgot-password",
    "/payment",
  ];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && (
        <>
          <Navbar onCartClick={toggleCart} />
          <Cart isOpen={isCartOpen} onToggle={toggleCart} />
        </>
      )}
      <div style={{ paddingTop: shouldHideLayout ? "0" : "9vh" }}>
        {children}
      </div>
      {!shouldHideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/profile" element={<Profile />}>
                <Route path="user" element={<UserDetails />} />
                <Route path="orders" element={<Orders />} />
                <Route path="products" element={<PurchasedProducts />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/:mainCategory/:subcategory"
                element={<Subcategory />}
              />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/:productId" element={<Checkout />} />
              <Route path="/industrial" element={<Subcategory />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
