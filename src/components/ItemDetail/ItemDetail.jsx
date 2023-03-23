import React from "react";


export default function ItemDetail({ itemDetail }) {

  return (
    <div>
      <div className= "detail-container">
  
        <h2>{itemDetail.name}</h2>
        <img src={itemDetail.image} alt={itemDetail.name} />
        <p>{itemDetail.description}</p>
        <p>{itemDetail.price}</p>
      </div>
    </div>
  );
}
