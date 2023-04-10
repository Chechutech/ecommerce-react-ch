import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../Contex/CartContex";
import "./ItemDetail.css";

export default function ItemDetail({ itemDetail }) {
 const [addToCart, setAddToCart] = useState(false);
const{ addToCartItem} = useContext(CartContext);
  
const onAdd = (quantity) =>{
    setAddToCart(true);
    addToCartItem(itemDetail, quantity);
  }


  return (
   
      <div className= "detail-container">
        <div className="left-containter">      
        <img className="img-containter" src={itemDetail.image} alt={itemDetail.name} />
        </div>
        <div className="right-container">
        <h2>{itemDetail.name}</h2>  
        <p className="description-p">{itemDetail.description}</p>
        <p className="stock-p"><strong>Stock:</strong> {itemDetail.stock}</p>
        <span>€ {itemDetail.price}</span>
        {
          addToCart ? <Link to='/cart' className="nav-link" >
          <button className='add-to-cart'>Go to Cart</button></Link> : <ItemCount initial={1} stock={itemDetail.stock} onAdd={onAdd}/> 

        }
        </div>
      </div>
    
  );
}
