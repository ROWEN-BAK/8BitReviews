import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("Je bent uitgelogd.");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">8BitReviews</Link>
        <Link to="/catalog">Catalog</Link>
          <Link to="/publish">Publiceer spel</Link>
      </div>

      <div className="navbar-right">
        {loggedInUser ? (
          <>
            <span className="user">Welkom, {loggedInUser.gebruikersnaam}</span>
            <button onClick={handleLogout} className="logout-btn">Uitloggen</button>
          </>
        ) : (
          <>
            <Link to="/login">Inloggen</Link>
            <Link to="/register">Registreren</Link>
          </>
        )}
      </div>
    </nav>
  );
}
