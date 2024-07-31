import React from 'react';
import '../assests/Grid.css';
import GridItem from './GridItem';

const Grid = ({ data, loading }) => {
  return (
    <div className="grid-container">
      {data.map((item, index) => (
        <GridItem key={index} item={item} />
      ))}
      {loading && (
        <div className="loading-container">
          <img src="https://test.create.diagnal.com/images/placeholder_for_missing_posters.png" alt="Loading" className="loading-placeholder" />
        </div>
      )}
    </div>
  );
};

export default Grid;
