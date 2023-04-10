import React, { useContext } from "react";
import { CartContext } from "../Contex/CartContex";
import { Link } from "react-router-dom";
import ItemCart from "../components/ItemCart/ItemCart.jsx";
import "../components/ItemCart/itemCart.css";

export default function Cart() {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <div>
      <div className="cart-items">
        <div className="cart-items-header">Tu carrito</div>
        {cart.length === 0 && (
          <div className="cart-empty">
            <p>Pues mira, por ahora no hay nada en el carrito</p>
            <Link to="/" className="nav-link">
              <button className="add-to-cart">Buscar productos</button>
            </Link>
          </div>
        )}
        <div>
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
          <div className="cart-total">
            <p>Total: € {totalPrice()}</p>
            <button className="checkout-btn">
              <Link to="/checkout" className="nav-link">
                Confirmar pedido
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// <button onClick={handleClickOrder} ><Link to='/checkout'>Confirmar pedido</Link></button>
