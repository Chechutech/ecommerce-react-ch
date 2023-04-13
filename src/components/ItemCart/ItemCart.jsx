import React, { useContext } from 'react'
import { CartContext } from '../../Contex/CartContex'
import "../ItemCart/ItemCart.css";

export default function ItemCart({ product }) {
    const { removeItem } = useContext(CartContext);
  return ( 
    <div className='itemCart_container'>
        <img src={product.image} />
        <div className='item_content'>
            <p><strong>{product.name}</strong></p>
            <p>Cantidad:  {product.quantity}</p>
            <p>Precio x u:  € {product.price}</p>
            <p>Subtotal:  € {product.quantity * product.price}</p>
            <button onClick={()=> removeItem(product.id)} className='remove-btn'>Eliminar</button>
        </div>
    </div>
  )
}
