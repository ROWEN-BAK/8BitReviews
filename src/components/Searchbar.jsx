import React, { useState } from 'react';
import  "../data/games";

export default function GameCatalog() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎮 Game Catalogus</h1>
      
      <input
        type="text"
        placeholder="Zoek een game..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg mb-4"
      />

      <ul>
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <li key={game.id} className="mb-2">
              {game.name}
            </li>
          ))
        ) : (
          <li className="text-gray-500">Geen games gevonden.</li>
        )}
      </ul>
    </div>
  );
}
