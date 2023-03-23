import React from 'react'
import { useState, useEffect } from 'react';
import mockList from '../../mocks/mockList';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  const { id } = useParams();

  const [itemDetail, setItemDetail] = useState();

  useEffect(() => {
    const singleItem = new Promise((resolve) => {
      const getItem = mockList.find((i) => i.id === parseInt(id));
      setTimeout(() => resolve(getItem), 2000);
    });

    singleItem
      .then((response) => {
        setItemDetail(response);
      })
      .catch((err) => console.log(err));
  }, [id]);

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