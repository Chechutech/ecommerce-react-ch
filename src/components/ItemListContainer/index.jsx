import React from "react";
import "./ItemListContainer.css";
import mockList from "../../mocks/mockList";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer({categoryId, isCategoryRoute}) {
  
  
  const [products, setProducts] = useState([]);
  
  
  useEffect(() => {
    const stock = new Promise((resolve) =>
      setTimeout(() => resolve(mockList), 2000)
    );
    stock
      .then((response) => {
        if (isCategoryRoute){
        const filterProduct = response.filter(
          (product) => product.category === categoryId
          );
      setProducts(filterProduct);
    } else {
      setProducts(response);
    }
        })
       .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div className="itemList-container">
      <ItemList products={products} />
    </div>
  );
}
