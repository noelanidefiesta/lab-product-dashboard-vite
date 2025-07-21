import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  const inStockProducts = products.filter(product => product.inStock);

  if (inStockProducts.length === 0) {
    return <p>No products in stock.</p>;
  }

  return (
    <>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductList;
