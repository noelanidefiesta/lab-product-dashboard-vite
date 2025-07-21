import React from "react";
import ProductList from "./components/ProductList";

function App() {
  const products = [
    { id: 1, name: "MacBook Pro", price: 1999, inStock: true },
    { id: 2, name: "iPhone 15", price: 999, inStock: false },
    { id: 3, name: "iPad Air", price: 799, inStock: true }
  ];

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
