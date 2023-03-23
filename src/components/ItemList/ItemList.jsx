import React from "react";
import Item from "../Item/Item";


export default function ItemList({ products }) {
  return (
    //<div>Padre de Item</div>
    <div>
      <div>
        {products.map((product, index) => (
          <Item product={product} key={product.id} />
        ))}
        </div>
    </div>
  );
}
