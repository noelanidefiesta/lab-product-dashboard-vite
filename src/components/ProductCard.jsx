import React from "react";
import styles from "../styles/ProductCard.module.css";
import Button from "@mui/material/Button";

function ProductCard({ product }) {
  return (
    <div className={product.inStock ? styles.card : styles.outOfStock}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
      <Button variant="contained" disabled={!product.inStock}>
        Buy Now
      </Button>
    </div>
  );
}

export default ProductCard;
