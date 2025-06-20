import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/search-bar.css';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useState({
    category: '',
    location: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchParams.category || searchParams.location) {
      navigate(`/search?category=${searchParams.category}&location=${searchParams.location}`);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-fields">
        <div className="form-group">
          <select
            name="category"
            value={searchParams.category}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Personal Items">Personal Items</option>
            <option value="Documents">Documents</option>
            <option value="Clothing">Clothing</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <select
            name="location"
            value={searchParams.location}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">All Locations</option>
            <option value="Library">Library</option>
            <option value="Cafeteria">Cafeteria</option>
            <option value="Classroom">Classroom</option>
            <option value="Sports Complex">Sports Complex</option>
            <option value="Parking Lot">Parking Lot</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary search-btn">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;