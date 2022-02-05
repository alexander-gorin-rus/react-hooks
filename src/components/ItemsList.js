import React, {useEffect, useState} from 'react';

const ItemsList = ({ getItems }) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const newItems = getItems()
        setItems(newItems);
        console.log('render ItemsList component')
    },[getItems]);


  return (
      <ul>
          {items.map((i, index) => (
              <li key={index}>{i}</li>
          ))}
      </ul>
  )
};

export default ItemsList;
