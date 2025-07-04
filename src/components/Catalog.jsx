import React, { useState } from "react";
import games from "../data/games";
import "./../styles/Catalog.css";
import Reviews from "./components/Reviews.jsx";

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState(null); // ← gekozen game

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

      {/* Game Cards */}
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

      {/* Detail Modal Card */}
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

function Review() {
  return (
    <div>
      {/* Voorbeeld met ingelogde gebruiker "emma" */}
      <Reviews currentUser="emma" />
    </div>
  );
}