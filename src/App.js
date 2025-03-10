import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import ProductListingPage from "./pages/ProductListingPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import Header from "./components/Header";
import "./styles/styles.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const existingPlant = cart.find((item) => item.id === plant.id);
    if (existingPlant) {
      // If plant already exists, just increase quantity
      setCart(
        cart.map((item) =>
          item.id === plant.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        )
      );
    } else {
      // If plant is new, add with quantity 1
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage addToCart={addToCart} cart={cart} />} />
        {/* Pass setCart to ShoppingCartPage so it can modify cart */}
        <Route path="/cart" element={<ShoppingCartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
