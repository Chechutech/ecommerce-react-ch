import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";



export default function ItemList({ products }) {
  return (
    //<div>Padre de Item</div>
    <div>
      <div>
        {products.map((product, index) => (
          <Link to={`/item/${product.id}`} key={product.id}>
          <Item product={product}  />
          </Link> ))}
        </div>
    </div>
  );
}
