import React from 'react';
import '../assests/GridItem.css';

const GridItem = ({ item }) => {
  const imageUrl = item['poster-image']
    ? `https://test.create.diagnal.com/images/${item['poster-image']}`
    : 'https://test.create.diagnal.com/images/placeholder_for_missing_posters.png';

  return (
    <div className="grid-item">
      <img
        src={imageUrl}
        alt={item.name}
        onError={(e) => {
          e.target.src = 'https://test.create.diagnal.com/images/placeholder_for_missing_posters.png';
        }}
      />
      <p>{item.name}</p>
    </div>
  );
};

export default GridItem;

