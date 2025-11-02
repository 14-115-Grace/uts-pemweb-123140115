// src/App.jsx
import React, { useState, useEffect } from 'react'; 
import Header from './components/Header'; 
import SearchForm from './components/SearchForm'; 
import DataTable from './components/DataTable'; 
import DetailCard from './components/DetailCard'; 
import { getGames } from './services/api'; 
import './App.css';

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [queryParams, setQueryParams] = useState({
    search: '',
    platforms: '',
    ordering: '',
  });

  const [selectedGameId, setSelectedGameId] = useState(null);

  useEffect(() => {
    if (selectedGameId !== null) return;

    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getGames(queryParams); 
        setGames(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [queryParams, selectedGameId]); 
  const handleSearch = (query) => {
    setQueryParams((prev) => ({ ...prev, search: query }));
  };

  const handleFilter = (platformId, isChecked) => {
    setQueryParams((prev) => {
      const platformSet = new Set(prev.platforms.split(',').filter(Boolean));
      if (isChecked) platformSet.add(platformId);
      else platformSet.delete(platformId);
      return { ...prev, platforms: Array.from(platformSet).join(',') };
    });
  };

  const handleSort = (sortValue) => {
    setQueryParams((prev) => ({ ...prev, ordering: sortValue }));
  };

  // === HANDLER NAVIGASI ===
  const handleGameClick = (id) => setSelectedGameId(id);
  const handleHomeClick = () => setSelectedGameId(null);

  // === RENDER (JSX) ===
  return (
    <div className="app-container">
      <Header onHomeClick={handleHomeClick} />
      <main>
        {selectedGameId ? (
          <DetailCard
            gameId={selectedGameId}
            onBackClick={handleHomeClick}
          />
        ) : (
          <>
            <SearchForm
              onSearch={handleSearch}
              onFilter={handleFilter}
              onSort={handleSort}
            />
            {loading && <p className="loading">Loading, Wait ya</p>}
            {error && <p className="error">Error: {error}</p>}
            {!loading && !error && (
              <DataTable games={games} onGameClick={handleGameClick} />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;