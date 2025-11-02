// src/components/SearchForm.jsx
import React, { useState } from 'react';

function SearchForm({ onSearch, onFilter, onSort }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handlePlatformChange = (e) => {
    onFilter(e.target.name, e.target.checked);
  };

  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="filter-container">
      <div className="left-filters">
        {/* Filter Platform */}
        <div className="platform-filters">
          <label>
            <input type="checkbox" name="4" onChange={handlePlatformChange} /> PC
          </label>
          <label>
            <input type="checkbox" name="187" onChange={handlePlatformChange} /> PlayStation
          </label>
          <label>
            <input type="checkbox" name="1" onChange={handlePlatformChange} /> Xbox
          </label>
        </div>

        {/* Sort Dropdown */}
        <div className="sort-options">
          <select onChange={handleSortChange} defaultValue="">
            <option value="" disabled>Urutkan...</option>
            <option value="-rating">Rating (Tinggi)</option>
            <option value="-released">Rilis (Baru)</option>
          </select>
        </div>
      </div>

      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Cari game..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
          minLength={3}
        />
        <button type="submit">Cari</button>
      </form>
    </div>
  );
}
export default SearchForm;