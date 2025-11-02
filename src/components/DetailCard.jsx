// src/components/DetailCard.jsx
import React, { useState, useEffect } from 'react';
import { getGameDetails, getGameScreenshots } from '../services/api';

function DetailCard({ gameId, onBackClick }) {
  const [details, setDetails] = useState(null);
  const [screenshots, setScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!gameId) return;

    const fetchAllDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Panggil 2 API sekaligus
        const detailData = await getGameDetails(gameId);
        const screenshotData = await getGameScreenshots(gameId);

        setDetails(detailData);
        setScreenshots(screenshotData.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllDetails();
  }, [gameId]);

  if (loading) return <p className="loading">⏳</p>;
  if (error) return <p className="error">Yahh, error: {error} 😭</p>;
  if (!details) return <p>Data gak ada.</p>;

  return (
    <div className="game-detail-card">
      <button onClick={onBackClick} className="back-button">
        ← Kembali
      </button>
      
      <h2>{details.name}</h2>
      <img src={details.background_image} alt={details.name} className="detail-header-image" />
      
      <h3>Deskripsi</h3>
      <div
        className="game-description"
        dangerouslySetInnerHTML={{ __html: details.description }}
      />

      <h3>Genres</h3>
      <p>{details.genres.map((g) => g.name).join(', ')}</p>

      <h3>Screenshots</h3>
      <div className="screenshots-grid">
        {screenshots.map((ss) => (
          <img key={ss.id} src={ss.image} alt="Screenshot" />
        ))}
      </div>
    </div>
  );
}
export default DetailCard;