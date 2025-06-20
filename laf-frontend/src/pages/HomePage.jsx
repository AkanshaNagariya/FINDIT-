import React, { useState, useEffect } from 'react';
import ItemCard from '../components/common/ItemCard';
import SearchBar from '../components/common/SearchBar';
import { getItems } from '../services/items';
import '../assets/styles/home.css';

const HomePage = ({ hideHeaderFooter }) => {
  const [recentItems, setRecentItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentItems = async () => {
      try {
        const items = await getItems();
        const sortedItems = items.sort((a, b) => 
          new Date(b.dateReported) - new Date(a.dateReported)
        );
        setRecentItems(sortedItems.slice(0, 4));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentItems();
  }, []);

  return (
    <div className="home-page">
      <main className="main-content">
        <section className="hero-section">
          <div className="container">
            <h1 className="hero-title">FINDIT ~ CampusLost & Found</h1>
            <p className="hero-subtitle">Reuniting lost items with their owners</p>
          </div>
        </section>

        <section className="search-section">
          <div className="container">
            <SearchBar />
          </div>
        </section>

        <section className="recent-items-section">
          <div className="container">
            <h2 className="section-title">Recently Reported Items</h2>
            {loading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
              </div>
            ) : error ? (
              <div className="error-message">{error}</div>
            ) : (
              <div className="items-grid">
                {recentItems.map(item => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;