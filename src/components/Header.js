import React from 'react';
import '../assests/Header.css';

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="header-title">
        <button className="back-button">{/* Back Button Icon */}</button>
        <h1>Romantic Comedy</h1>
      </div>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search" 
          onChange={onSearch} 
        />
        <span className="search-icon">&#128269;</span>
      </div>
    </header>
  );
};

export default Header;
