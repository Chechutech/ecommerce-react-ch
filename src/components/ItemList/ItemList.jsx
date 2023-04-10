import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import "./itemList.css"



export default function ItemList({ products }) {
  return (
  
    <div>
      <div className="itemList-container">
        {products.map((product, index) => (
          <Link to={`/item/${product.id}`}  key={product.id} className="nav-link">
          <Item product={product}  />
          </Link> ))}
        </div>
    </div>
  );
}
