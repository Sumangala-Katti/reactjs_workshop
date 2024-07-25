import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from './components/Grid';
import SearchBar from './components/SearchBar';
import './assests/styles.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await axios.get(`https://test.create.diagnal.com/data/page${page}.json`);
        console.log('API Response:', result.data);
        const content = result.data?.page?.['content-items']?.content || [];
        console.log('Fetched Data:', content);
        if (Array.isArray(content)) {
          setData(prevData => [...prevData, ...content]);
        } else {
          throw new Error('Fetched data is not an array');
        }
      } catch (err) {
        if (err.response && err.response.status === 403) {
          console.warn(`Access to page ${page} is forbidden.`);
          setError(`Page ${page} is not accessible.`);
          setPage(prevPage => Math.max(prevPage - 1, 1));
        } else {
          console.error('Error fetching data:', err.response ? err.response.data : err.message);
          setError('Error fetching data');
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [page]);

  const handleScroll = () => {
    console.log('Error state:', error);
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !loading && !(error && error.includes('forbidden'))) {
      setPage(prevPage => prevPage + 1);
    }
  };
  
  
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="app">
      <SearchBar setSearchQuery={setSearchQuery} />
      {error && <div className="error">{error}</div>}
      <Grid data={filteredData} />
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default App;
