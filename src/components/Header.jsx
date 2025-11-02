// src/components/Header.jsx
import React from 'react';

function Header({ onHomeClick }) {
  const handleTitleClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  return (
    <header className="app-header">
      <h1>
        <a href="/" onClick={handleTitleClick}>
          🎮 Game Database 🎮
        </a>
      </h1>
    </header>
  );
}
export default Header;