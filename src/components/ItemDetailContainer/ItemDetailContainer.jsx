import React from 'react'
import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc =doc(querydb, 'products', id);
    getDoc(queryDoc)
    .then(res => setItemDetail({ id: res.id, ...res.data() }))
    .catch((err) => console.log(err));
   
  }, [id])


  return (
    <div>
      {itemDetail ? (
        <ItemDetail itemDetail={itemDetail} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}