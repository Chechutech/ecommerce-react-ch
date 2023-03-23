import React from 'react'
import { useState, useEffect } from 'react';
import mockList from '../../mocks/mockList';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer({ itemId }) {
  
  const [itemDetail, setItemDetail] = useState();



 useEffect(() => {
  const singleItem = new Promise((resolve) =>
      setTimeout(() => resolve(mockList), 2000)
    );
    singleItem
    .then((response) => {
      const getItem = response.find((i) => i.id === parseInt(itemId));
      setItemDetail(getItem);
    
    })
    .catch((err) => console.log(err));
    
  
}, [itemId]); 
   
  
    return (
       
       
     <div><ItemDetail itemDetail={itemDetail} /> </div>
  )
}
