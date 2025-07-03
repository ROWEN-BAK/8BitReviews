

import React from "react";
import "../../src/styles/Home.css";

export default function HomePage() {
  return (
    <div className="home">
      <header className="header">
        <div className="container">
          <h1 className="title">8-bit Reviews</h1>
        </div>
      </header>

      <main className="main">
        <section className="intro">
          <div className="intro-card">
            <h2 className="subtitle">Welkom bij 8-bit Reviews</h2>
            <p className="intro-text">
              Dé plek voor eerlijke retro- en moderne gamereviews.
            </p>
            <button className="cta-button">Lees reviews</button>
          </div>
        </section>

        <section className="reviews">
          <div className="card">
            <h3 className="card-title">Speltitel 1</h3>
            <p className="card-text">Korte review of beschrijving van het spel.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Speltitel 2</h3>
            <p className="card-text">Korte review of beschrijving van het spel.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Speltitel 3</h3>
            <p className="card-text">Korte review of beschrijving van het spel.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2025 8-bit Reviews. Alle rechten voorbehouden.
      </footer>
    </div>
  );
}