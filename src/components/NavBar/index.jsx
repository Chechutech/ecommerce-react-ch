import React from "react";
import "./navbar.css";
import { VscAccount } from "react-icons/vsc";
import { TfiWorld } from "react-icons/tfi";
import CartWidget from "../CardWidget";

export default function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">VeGreenShop</div>
      <div className="menu">
        <ul className="menu-choices">
          <li>Info</li>
          <li>Categoria</li>
          <li>Marcas</li>
        </ul>
             <input
            type="text"
            className="search-bar"
            placeholder="Encuentra.."
            aria-label="Search"
          ></input>
          <VscAccount className="user-icon" />
          <CartWidget />
          <TfiWorld />
      </div>
    </div>
  );
}
