import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItems } from '../../services/items';
import Sidebar from '../../components/common/Sidebar';
import ItemCard from '../../components/common/ItemCard';
import '../../assets/styles/all-items.css';

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="all-items-page">
      <Sidebar />
      
      <main className="all-items-content">
        <div className="container">
          <div className="page-header">
            <h1>All Reported Items</h1>
            <Link to="/admin/dashboard" className="btn btn-outline">
              Back to Dashboard
            </Link>
          </div>

          {loading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="items-grid">
              {items.map(item => (
                <ItemCard key={item.id} item={item} adminView />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AllItems;