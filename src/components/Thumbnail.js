import React from 'react';

const Thumbnail = ({ item }) => {
  if (!item) return null;
  return (
    <div className="thumbnail">
      <img src={`https://test.create.diagnal.com/images/${item.posterImage}`} alt={item.title} />
      <h3>{item.title}</h3>
    </div>
  );
};

export default Thumbnail;
