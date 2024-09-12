import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import ShopPage from "./components/ShopPage/ShopPage";
import HomePage from "./components/HomePage/HomePage";
import Cart from "./components/Card/Card";
import { CartContextProvider } from "./Context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
