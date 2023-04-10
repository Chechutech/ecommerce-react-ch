import React, { useState, useEffect } from 'react'
import "./ItemCount.css"

function ItemCount({initial, stock, onAdd}) {
 const [count, setCount] = useState(initial);

 const decreaseCount = () => {
  setCount(count - 1);
 }
 const increaseCount = () => {
  setCount(count + 1);
 }
useEffect(() =>{
  setCount(parseInt(initial));
},[initial])


  return (
   
    <>
    <div className='item-count'>
    <div className='btn-quantity'>
    <button disabled={count <= 1} onClick={decreaseCount} className='btn-separator'>-</button> 
    <span>{count}</span>
    <button disabled={count >= stock} onClick={increaseCount} className='btn-separator'>+</button> 
    </div>
    </div>
    <div >
      <button className='add-to-cart' disabled= {stock <= 0} onClick={() => onAdd(count)}>Add to cart</button> 
    </div>
    </>
  )
}

export default ItemCount