import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/item-card.css';

const ItemCard = ({ item }) => {
  if (!item) return null; // Failsafe in case `item` is undefined

  return (
    <div className="item-card">
      <div className="item-image-container">
        <img 
          src={item.imageUrl || '/placeholder-item.jpg'} 
          alt={item.title || 'Item'} 
          className="item-image"
          onError={(e) => {
            e.target.src = '/placeholder-item.jpg';
          }}
        />
        <span className={`item-status ${item.status ? item.status.toLowerCase() : 'unknown'}`}>
          {item.status || 'Unknown'}
        </span>
      </div>
      <div className="item-details">
        <h3 className="item-title">{item.title || 'Untitled Item'}</h3>
        <p className="item-description">{item.description || 'No description available.'}</p>
        <div className="item-meta">
          <span className="item-category">{item.category || 'Uncategorized'}</span>
          <span className="item-location">{item.location || 'Unknown Location'}</span>
        </div>
        <Link to={`/items/${item.id || ''}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
