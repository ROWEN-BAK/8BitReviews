import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import "./../styles/Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    wachtwoord: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === formData.email);

    if (!user) {
      setError("Gebruiker niet gevonden");
      return;
    }

    const isPasswordCorrect = bcrypt.compareSync(
      formData.wachtwoord,
      user.wachtwoord
    );

    if (!isPasswordCorrect) {
      setError("Ongeldig wachtwoord");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Succesvol ingelogd!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Inloggen</h2>

        <label>E-mailadres</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Wachtwoord</label>
        <input
          type="password"
          name="wachtwoord"
          value={formData.wachtwoord}
          onChange={handleChange}
        />

        {error && <span className="error">{error}</span>}

        <button type="submit">Inloggen</button>
      </form>
    </div>
  );
}
