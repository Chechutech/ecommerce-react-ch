import React from 'react';
import './navbar.css'
import {AiOutlineShoppingCart} from "react-icons/ai"

export default function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">Logo</div>
      <div className="menu">
        <div>
        <input type="text" className="search-bar" aria-label="Search"></input>
        {/* <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button> */}

        </div>
        <ul className="menu-choices">
          <li>About</li>
          <li>Productos</li>
          <li>Sale</li>
          <li>ENG</li>
        </ul>   
      
        <AiOutlineShoppingCart className="shopping-icon"/>
      </div>
    </div>
  );
}
