import React from 'react'
import { BsCart4 } from "react-icons/bs";
import "./cartWidget.css";

export default function CartWidget() {
  return (
    <div className="cart">
        <BsCart4 className="shopping-icon" /><span className="cart-badge">1</span>
    </div>
  )
}
