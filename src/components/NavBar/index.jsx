import React from "react";
import "./navbar.css";
import { VscAccount } from "react-icons/vsc";
import { TfiWorld } from "react-icons/tfi";
import CartWidget from "../CardWidget";
import { NavLink } from "react-router-dom";


export default function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
      <NavLink to={"/"}>VeGreenShop</NavLink></div>
      <div className="menu">
        <ul className="menu-choices">
         <NavLink to={"/category/body"}><li>Body</li></NavLink>
         <NavLink to={"/category/face"}><li>Face</li></NavLink>
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
