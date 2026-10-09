
import { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  return (
    <div className="app">
      <Header />

      <div className="tab-title">
        Tab title: Wireless Mouse | {selectedColor} | Cart: {quantity}
      </div>

      <main className="main-content">
        {showProduct && (
          <ProductCard
            productName="Wireless Mouse"
            price={499}
            quantity={quantity}
            setQuantity={setQuantity}
            selectedColor={selectedColor}
            deliveryCity={deliveryCity}
          />
        )}

        <div className="controls">
          <div className="input-group">
            <label>Product colour</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="White">White</option>
            </select>
          </div>

          <div className="input-group">
            <label>Delivery city</label>
            <input
              type="text"
              value={deliveryCity}
              onChange={(e) => setDeliveryCity(e.target.value)}
              placeholder="Enter delivery city"
            />
          </div>
        </div>

        <div className="button-group">
          <button
            className="add-button"
            onClick={() => setQuantity(q => q + 1)}
          >
            Add to Cart
          </button>

          <button
            onClick={() => setQuantity(q => Math.max(0, q - 1))}
            disabled={quantity === 0}
          >
            Remove One
          </button>

          <button onClick={() => setQuantity(0)}>
            Reset Cart
          </button>

          <button onClick={() => setShowProduct(show => !show)}>
            {showProduct ? "Hide Product" : "Show Product"}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;