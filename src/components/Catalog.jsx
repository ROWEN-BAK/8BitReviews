import React, { useState, useEffect } from "react";
import gamesData from "../data/games";
import "./../styles/Catalog.css";

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);
  const [allGames, setAllGames] = useState([]);


  useEffect(() => {
    const publishedGames = JSON.parse(localStorage.getItem("publishedGames")) || [];
    setAllGames([...gamesData, ...publishedGames]);
  }, []);

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
          filteredGames.map((game) => (
            <div
              className="game-card"
              key={game.id}
              onClick={() => setSelectedGame(game)}
              style={{ cursor: "pointer" }}
            >
              <h2>{game.title}</h2>
              <p><strong>Genre:</strong> {game.genre}</p>
            </div>
          ))
        ) : (
          <p className="no-results">Geen games gevonden.</p>
        )}
      </div>

      {selectedGame && (
        <div className="modal-overlay" onClick={() => setSelectedGame(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedGame.title}</h2>
            <p><strong>Genre:</strong> {selectedGame.genre}</p>
            {selectedGame.description && (
              <p><strong>Beschrijving:</strong> {selectedGame.description}</p>
            )}
            <button className="close-button" onClick={() => setSelectedGame(null)}>
              Sluit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
