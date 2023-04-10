import React from "react";
import "./navbar.css";
import { VscAccount } from "react-icons/vsc";
import { TfiWorld, TfiMenu } from "react-icons/tfi";
import CartWidget from "../CardWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link to={"/"} className="nav-link">
          Midori
        </Link>
      </div>
      <div className="menu">
        <ul className="menu-choices">
          <Link to={"/category/body"} className="nav-link">
            <li>Body</li>
          </Link>
          <Link to={"/category/face"} className="nav-link">
            <li>Face</li>
          </Link>
          <li>Nosotras</li>
        </ul>
        <input
          type="text"
          className="search-bar"
          placeholder="Encuentra.."
          aria-label="Search"
        ></input>
        <VscAccount className="user-icon" />
        <Link to={"/cart"} className="nav-link">
          <CartWidget />
        </Link>
        <TfiWorld />
        {/* <button><TfiMenu className="menu-icon"/></button> */}
      </div>
    </div>
  );
}
