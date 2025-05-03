import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";

import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div style={{ paddingTop: "9vh" }}>
          <Routes>
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
