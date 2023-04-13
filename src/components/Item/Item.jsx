import React, { useContext } from "react";
import { CartContext } from "../../Contex/CartContex";

import "./item.css";


export default function Item({ product }) {
  const { name }= useContext(CartContext);
 


  return (
    <div className="item-container">
      <div className="item-card">
        <div className="card-img">
          <img src={product.image} />
        </div>
        <div className="text-container">
          <h4>{product.name}</h4>
          <p>{product.description}</p>         
          <span>€ {product.price}</span>          
        
        </div>
      </div>
    </div>
  );
}
