import React from "react";
import "./itemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer({ categoryId, isCategoryRoute }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");

    if (isCategoryRoute) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoryId)
      );

      getDocs(queryFilter)
        .then((res) =>
          setProducts(
            res.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        )
        .catch((error) =>
          console.log("Error al obtener productos de la categoría", error)
        );
    } else {
      getDocs(queryCollection)
        .then((res) =>
          setProducts(
            res.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        )
        .catch((error) =>
          console.log("Error al obtener todos los productos", error)
        );
    }
  }, [categoryId]);

  return (
    <>
      <div className="list-container">
        <h3>Productos</h3>
        <div className="itemList-containerss">
          <ItemList products={products} />
        </div>
      </div>
    </>
  );
}
