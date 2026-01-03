import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

// Components
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

// ------------------------------
// Route configuration object
const routeConfig = [
  { path: "/", element: <Home />, navbar: true, cart: true, footer: true },
  {
    path: "/login",
    element: <Login />,
    navbar: false,
    cart: false,
    footer: false,
  },
  {
    path: "/signup",
    element: <SignUp />,
    navbar: false,
    cart: false,
    footer: false,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    navbar: false,
    cart: false,
    footer: false,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    navbar: false,
    cart: false,
    footer: false,
  },
  {
    path: "/checkout/:productId",
    element: <Checkout />,
    navbar: false,
    cart: false,
    footer: false,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
    navbar: false,
    cart: false,
    footer: false,
  },
  {
    path: "/account-deletion",
    element: <AccountDeletionPage />,
    navbar: false,
    cart: false,
    footer: false,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
    navbar: true,
    cart: false,
    footer: false,
  },
  {
    path: "/terms-conditions",
    element: <Terms_Conditions />,
    navbar: true,
    cart: false,
    footer: false,
  },
  {
    path: "/objectives",
    element: <Objectives />,
    navbar: true,
    cart: false,
    footer: false,
  },
  {
    path: "/warranty-policy",
    element: <WarrantyPolicy />,
    navbar: true,
    cart: false,
    footer: false,
  },
  {
    path: "/import-fees-deposit",
    element: <Import_Fees_Deposit />,
    navbar: true,
    cart: false,
    footer: true,
  },
  {
    path: "/:mainCategory/:subcategory",
    element: <Subcategory />,
    navbar: true,
    cart: true,
    footer: true,
  },
  {
    path: "/product/:id",
    element: <Product />,
    navbar: true,
    cart: true,
    footer: true,
  },
  {
    path: "/industrial",
    element: <Subcategory />,
    navbar: true,
    cart: true,
    footer: true,
  },
];

// ------------------------------
// Helper to match dynamic routes
const matchRouteConfig = (pathname) => {
  return routeConfig.find((route) => {
    const regex = new RegExp("^" + route.path.replace(/:\w+/g, "[^/]+") + "$");
    return regex.test(pathname);
  });
};

// ------------------------------
// Layout component
function Layout({ children }) {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const matchedRoute = matchRouteConfig(location.pathname);

  // Defaults if route not found
  const showNavbar = matchedRoute ? matchedRoute.navbar : true;
  const showCart = matchedRoute ? matchedRoute.cart : true;
  const showFooter = matchedRoute ? matchedRoute.footer : true;

  return (
    <>
      {showNavbar && <Navbar onCartClick={toggleCart} showCart={showCart} />}
      {showCart && <Cart isOpen={isCartOpen} onToggle={toggleCart} />}
      <div style={{ paddingTop: showNavbar ? "9vh" : "0" }}>{children}</div>
      {showFooter && <Footer />}
    </>
  );
}

// ------------------------------
// Main App
function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              {routeConfig.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}

              <Route path="/profile" element={<Profile />}>
                <Route index element={<Navigate to="user" replace />} />
                <Route path="user" element={<UserDetails />} />
                <Route path="orders" element={<Orders />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
