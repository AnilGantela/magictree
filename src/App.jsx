import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";

import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div style={{ paddingTop: "9vh" }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
