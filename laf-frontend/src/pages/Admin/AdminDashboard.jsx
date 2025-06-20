import React, { useState, useEffect } from 'react';
import { getItems }  from '../../services/items';
import Sidebar from '../../components/common/Sidebar';
import { Link } from 'react-router-dom';
import '../../assets/styles/admin-dashboard.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalItems: 0,
    lostItems: 0,
    foundItems: 0,
    pendingClaims: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const items = await getItems();
        
        const lostItems = items.filter(item => item.status === 'LOST').length;
        const foundItems = items.filter(item => item.status === 'FOUND').length;
        
        // This would come from your API in a real app
        const pendingClaims = items.reduce((acc, item) => acc + (item.claims || []).length, 0);
        
        setStats({
          totalItems: items.length,
          lostItems,
          foundItems,
          pendingClaims
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="admin-dashboard-page">
      <Sidebar />
      
      <main className="admin-dashboard-content">
        <div className="container">
          <h1>Admin Dashboard</h1>
          
          {loading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Items</h3>
                                <p className="stat-value">{stats.totalItems}</p>
              </div>
              
              <div className="stat-card">
                <h3>Lost Items</h3>
                <p className="stat-value">{stats.lostItems}</p>
              </div>
              
              <div className="stat-card">
                <h3>Found Items</h3>
                <p className="stat-value">{stats.foundItems}</p>
              </div>
              
              <div className="stat-card">
                <h3>Pending Claims</h3>
                <p className="stat-value">{stats.pendingClaims}</p>
                <Link to="/admin/claims" className="btn btn-primary manage-claims-btn">
                  Manage Claims
                </Link>
              </div>
            </div>
          )}
          
          <div className="admin-actions">
            <Link to="/admin/items" className="btn btn-outline">
              View All Items
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;