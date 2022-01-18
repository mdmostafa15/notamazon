import React from "react";
import HomeScreen from "./layout/HomeScreen";
import ProductScreen from "./layout/ProductScreen";
import {Link, Route, Routes} from "react-router-dom";


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
            <Route path="product" >
              <Route path=":productId" element={<ProductScreen />} />
            </Route>
          </Routes>
        </main>
        <footer className="cus-row center">
          <div>All Rights Reserves</div>
        </footer>
    </div>
  );
}

export default App;
