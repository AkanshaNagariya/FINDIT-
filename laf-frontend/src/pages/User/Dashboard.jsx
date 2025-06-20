import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItems } from '../../services/items';
import ItemCard from '../../components/common/ItemCard';
import Sidebar from '../../components/common/Sidebar';
import '../../assets/styles/dashboard.css';

const Dashboard = () => {
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
    <div className="dashboard-page">
      <Sidebar />
      
      <main className="dashboard-content">
        <div className="container">
          <div className="dashboard-header">
            <h1>Reported Items</h1>
            <Link to="/report-item" className="btn btn-primary">
              Report New Item
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
                <ItemCard key={item.id} item={item} showClaim={item.status === 'FOUND'} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;