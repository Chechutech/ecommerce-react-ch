import React from "react";

import "./item.css";

export default function Item({ product }) {
  return (
    <div className="item-container">
      <div className="item-card">
        <div className="card-img">
          <img src={product.image} />
        </div>
        <div className="text-container">
          <h3>{product.name} </h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
}
