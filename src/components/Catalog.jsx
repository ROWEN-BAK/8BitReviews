import React from "react";
import games from "../data/games";
import "./../styles/Catalog.css";

export default function Catalog() {
  return (
    <div className="catalog-page">
      <h1>Spelcatalogus</h1>
      <div className="game-grid">
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <h2>{game.title}</h2>
            <p><strong>Genre:</strong> {game.genre}</p>
            {/* Future: Add link to game details here */}
          </div>
        ))}
      </div>
    </div>
  );
}
