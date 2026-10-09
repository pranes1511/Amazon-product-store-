
import { useEffect } from "react";

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity
}) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Wireless_computer_mouse.jpg"
          alt="Wireless Mouse"
        />
      </div>

      <div className="product-details">
        <h2>{productName}</h2>

        <p className="price">
          ₹{price} <span>per item</span>
        </p>

        <p>
          Colour: <strong>{selectedColor}</strong>
        </p>

        <p>
          Deliver to: <strong>{deliveryCity}</strong>
        </p>

        <hr />

        <p>Cart Quantity: {quantity}</p>

        <p className="total">
          Total Amount: ₹{quantity * price}
        </p>

        <p className="status">
          {quantity === 0
            ? "Cart is empty"
            : "Product added to cart"}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;