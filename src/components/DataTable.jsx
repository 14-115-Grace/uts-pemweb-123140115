// src/components/DataTable.jsx
import React from 'react';

function DataTable({ games, onGameClick }) {
  const handleGameClick = (e, id) => {
    e.preventDefault();
    onGameClick(id);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>
                <img src={game.background_image} alt={game.name} className="game-cover-thumbnail" />
              </td>
              <td>
                <a href="#" onClick={(e) => handleGameClick(e, game.id)} className="game-title-link">
                  {game.name}
                </a>
              </td>
              <td>{game.rating} ⭐</td>
              <td>{game.released}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DataTable;