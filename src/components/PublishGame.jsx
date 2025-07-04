import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/PublishGame.css";

export default function PublishGame() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    description: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
      alert("Je moet ingelogd zijn om een spel te publiceren.");
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedGames = JSON.parse(localStorage.getItem("publishedGames")) || [];

    const newGame = {
      id: Date.now(),
      ...formData,
    };

    storedGames.push(newGame);
    localStorage.setItem("publishedGames", JSON.stringify(storedGames));
    alert("Spel succesvol gepubliceerd!");
    navigate("/catalog");
  };

  return (
    <div className="publish-container">
      <form className="publish-form" onSubmit={handleSubmit}>
        <h2>Publiceer een Spel</h2>

        <label>Titel</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />

        <label>Beschrijving</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Publiceer</button>
      </form>
    </div>
  );
}
