import React from 'react';

const Thumbnail = ({ item }) => {
  return (
    <div className="thumbnail-container">
      <img 
        src={`https://test.create.diagnal.com/images/${item.posterImage}`} 
        alt={item.name}
        className="thumbnail"
      />
      <div className="title">{item.name}</div>
    </div>
  );
};

export default Thumbnail;
