import React from 'react';

const Grid = ({ data }) => {
  return (
    <div className="grid">
      {data.map((item, index) => (
        <div className="grid-item" key={index}>
          <img src={`https://test.create.diagnal.com/images/${item['poster-image']}`} alt={item.name} />
          <div className="title">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
