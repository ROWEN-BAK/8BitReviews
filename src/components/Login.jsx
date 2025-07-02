import React, { useState } from "react";
import bcrypt from "bcryptjs";
import "./../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email);

    if (user && bcrypt.compareSync(wachtwoord, user.wachtwoord)) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert(`Welkom, ${user.gebruikersnaam}!`);
    } else {
      setError("Onjuiste e-mailadres of wachtwoord");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Inloggen</h2>

        <label>E-mailadres</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Wachtwoord</label>
        <input
          type="password"
          value={wachtwoord}
          onChange={(e) => setWachtwoord(e.target.value)}
        />

        {error && <span className="error">{error}</span>}

        <button type="submit">Inloggen</button>
      </form>
    </div>
  );
}
