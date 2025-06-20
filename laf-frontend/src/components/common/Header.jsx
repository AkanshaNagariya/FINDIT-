import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import '../../assets/styles/header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="app-header">
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <span className="logo-icon">🔍</span>
            <h1 className="app-name"> FINDIT ~ CampusLost & Found</h1>
          </Link>
        </div>
        
        <nav className="nav-menu">
          {user ? (
            <>
              {user.role === 'ADMIN' ? (
                <Link to="/admin/dashboard" className="nav-link">Admin Dashboard</Link>
              ) : (
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
              )}
              <button onClick={handleLogout} className="btn btn-outline">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;