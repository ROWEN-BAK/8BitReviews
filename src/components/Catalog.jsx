import React, { useState, useEffect } from "react";
import gamesData from "../data/games";
import "./../styles/Catalog.css";

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allGames, setAllGames] = useState([]);

  // Load games from localStorage on mount
  useEffect(() => {
   const localGames = JSON.parse(localStorage.getItem("publishedGames")) || [];
    setAllGames([...gamesData, ...localGames]);
  }, []); // Only runs once when component mounts

  const filteredGames = allGames.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="catalog-page">
      <h1>Spelcatalogus</h1>

      <input
        type="text"
        placeholder="Zoek op titel..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="game-grid">
        {filteredGames.length > 0 ? (
          filteredGames.map((game, index) => (
            <div className="game-card" key={index}>
              <h2>{game.title}</h2>
              <p><strong>Genre:</strong> {game.genre}</p>
            </div>
          ))
        ) : (
          <p className="no-results">Geen games gevonden.</p>
        )}
      </div>
    </div>
  );
}
