import React, { useState, useEffect } from 'react';
import './App.css';
import Grid from './components/Grid';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (pageNum) => {
    setLoading(true);
    try {
      const response = await fetch(`https://test.create.diagnal.com/data/page${pageNum}.json`);
      const result = await response.json();
      setData((prevData) => [...prevData, ...result.page['content-items'].content]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleScroll = (event) => {
    const bottom =
      event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (bottom) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="app-container" onScroll={handleScroll}>
      <div className="header">
        <img src="https://test.create.diagnal.com/images/Back.png" alt="Back" className="icon" />
        <h1>Romantic Comedy</h1>
        <div className="search-container">
          <img src="https://test.create.diagnal.com/images/search.png" alt="Search" className="icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </div>
      <Grid data={filteredData} loading={loading} />
    </div>
  );
};

export default App;
