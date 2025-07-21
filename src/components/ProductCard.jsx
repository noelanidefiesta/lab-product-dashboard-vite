import React, { useState } from "react";
import Button from "@mui/material/Button";

function ProductCard({ product }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={product.inStock ? "card" : "outOfStockClass"}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
      <Button variant="contained" disabled={!product.inStock}>
        Buy Now
      </Button>
      <Button onClick={() => setIsVisible(false)}>Remove</Button>
    </div>
  );
}

export default ProductCard;