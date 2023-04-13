import React from "react"; 
import { BsCart4 } from "react-icons/bs";
import "./cartWidget.css";
import { CartContext } from "../../Contex/CartContex";
import { useContext } from "react";
import {  Link } from "react-router-dom";



export default function CartWidget() {
  const { totalProducts } = useContext(CartContext);


  return (
    <>
    <div className="cart">
    <Link to="/cart" className="nav-link">
        <BsCart4 className="shopping-icon" /><span className="cart-badge">{totalProducts() || '0'}</span>
        </Link>
        </div>
        </>
  )
}
