import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">FINDIT ~ CampusLost & Found</h3>
          <p className="footer-text">
            Reuniting lost items with their owners across campus.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/report-item">Report Item</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <address className="footer-contact">
            <p><i className="fas fa-envelope"></i> help@campuslost.edu</p>
            <p><i className="fas fa-phone"></i> (123) 456-7890</p>
            <p><i className="fas fa-map-marker-alt"></i> 123 College Ave</p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} CampusLost & Found. All rights reserved.
          </p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;