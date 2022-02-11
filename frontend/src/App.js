import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./layout/HomeScreen";
import ProductScreen from "./layout/ProductScreen";


function App() {
  return (
    <div className="grid-container">
        <header className="cus-row">
          <div className="brand-logo">
            <Link to="/">!amazon</Link>
          </div>
          <div>
            <a href="./cart.html">Cart</a>
            <a href="./signin.html">Sign In</a>
          </div>
        </header>     
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="products/:productId" element={<ProductScreen  />} />
          </Routes>
        </main>
        <footer className="cus-row center">
          <div>All Rights Reserves</div>
        </footer>
    </div>
  );
}

export default App;
