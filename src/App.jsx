import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
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
import ForgotPassword from "./components/ForgotPassword";
import AccountDeletionPage from "./components/AccountDeletion";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Objectives from "./components/Objectives";
import Terms_Conditions from "./components/Terms_Conditions";
import Import_Fees_Deposit from "./components/Import_Fees_Deposit";
import WarrantyPolicy from "./components/Warranty";

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
    "/account-deletion",
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
                <Route index element={<Navigate to="user" replace />} />
                <Route path="user" element={<UserDetails />} />
                <Route path="orders" element={<Orders />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route
                path="/account-deletion"
                element={<AccountDeletionPage />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<Terms_Conditions />} />
              <Route path="/objectives" element={<Objectives />} />
              <Route path="/warranty-policy" element={<WarrantyPolicy />} />
              <Route
                path="/import-fees-deposit"
                element={<Import_Fees_Deposit />}
              />
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
