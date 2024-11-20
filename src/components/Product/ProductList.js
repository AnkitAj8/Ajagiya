import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="product-card"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
          />
          <div className="product-info">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
