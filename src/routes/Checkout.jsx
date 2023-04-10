import React, { useContext } from "react";
import { CartContext } from "../Contex/CartContex";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import "../styles/checkout.css";

export default function Checkout() {
  const { cart, totalPrice } = useContext(CartContext);
  const db = getFirestore();

  const updateOrder = (productId, finalStock) => {
    const itemRef = doc(db, "items", productId);
    updateDoc(itemRef, { stock: finalStock }).catch((err) => console.log(err));
  };

  const handleClickOrder = () => {
    const orderCollection = collection(db, "orders");
    const order = {
      buyer: {
        name: "Cecilia",
        email: "cecilia@gmail.com",
        phone: "1234566",
        addres: "asdd",
      },
      items: cart,
      total: totalPrice(),
    };

    addDoc(orderCollection, order)
      .then(() => {
        cart.map((product) => {
          const finalStock = product.stock - product.quantity;
          updateOrder(product.id, finalStock);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="container">
        <div className="form-container">
          <h3>Información personal</h3>
          <label>Nombre</label>
          <input type="text" placeholder="nombre" id="name" />
          <label>Email</label>
          <input type="text" placeholder="xxxxx@xxxx.com" id="email" />
          <label>Confirma tu email</label>
          <input type="text" placeholder="xxxxx@xxxx.com" id="confirm-email" />
          <label>Movil</label>
          <input type="text" placeholder="34564023032" id="phone" />
        </div>
        <div className="order-container">
          <h3>Tu pedido</h3>
          <div>
            <p>Total: € {totalPrice()}</p>
            <button onClick={handleClickOrder} className="order-button">
              Comprar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
