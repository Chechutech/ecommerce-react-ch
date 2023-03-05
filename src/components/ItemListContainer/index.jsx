import React from "react";
import "./ItemListContainer.css";
export default function ItemListContainer({ grettings }) {
  return (
    <div className="itemList-container">
      <h1>{grettings}</h1>
    </div>
  );
}
