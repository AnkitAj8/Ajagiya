import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="detail-image"
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      <div className="sub-cards">
        {product.images.slice(1).map((img, index) => (
          <div key={index} className="sub-card">
            <img src={img} alt={`Sub ${index}`} className="sub-image" />
          </div>
        ))}
      </div>

      <Link to="/" className="back-button">
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetail;
