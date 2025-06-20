import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import '../../assets/styles/sidebar.css';

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/dashboard" end className="sidebar-link">
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/report-item" className="sidebar-link">
              <i className="fas fa-plus-circle"></i>
              <span>Report Item</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="sidebar-link">
              <i className="fas fa-user"></i>
              <span>Profile</span>
            </NavLink>
          </li>
          {user?.role === 'ADMIN' && (
            <li>
              <NavLink to="/admin/dashboard" className="sidebar-link">
                <i className="fas fa-cog"></i>
                <span>Admin Panel</span>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;