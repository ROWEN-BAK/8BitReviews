import React, { useState } from "react";
import games from "../data/games";
import "./../styles/Catalog.css";

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter games op basis van zoekterm
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="catalog-page">
      <h1>Spelcatalogus</h1>

      {/* Zoekveld */}
      <input
        type="text"
        placeholder="Zoek op titel..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="game-grid">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <div className="game-card" key={game.id}>
              <h2>{game.title}</h2>
              <p><strong>Genre:</strong> {game.genre}</p>
              {/* Future: Add link to game details here */}
            </div>
          ))
        ) : (
          <p className="no-results">Geen games gevonden.</p>
        )}
      </div>
    </div>
  );
}
