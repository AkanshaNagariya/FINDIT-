import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ItemCard from '../components/common/ItemCard';
import { searchItems } from '../services/items';
import '../assets/styles/search-results.css';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const params = {
          category: searchParams.get('category'),
          location: searchParams.get('location')
        };
        const data = await searchItems(params);
        setResults(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [location.search]);

  return (
    <div className="search-results-page">
      <div className="container">
        <h1>Search Results</h1>
        
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : results.length === 0 ? (
          <div className="no-results">
            <p>No items found matching your search criteria</p>
          </div>
        ) : (
          <div className="results-grid">
            {results.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;