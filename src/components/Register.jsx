import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import "./../styles/Register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    gebruikersnaam: "",
    email: "",
    wachtwoord: "",
    bevestigWachtwoord: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      navigate("/"); 
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.gebruikersnaam)
      newErrors.gebruikersnaam = "Gebruikersnaam is verplicht";
    if (!formData.email.includes("@"))
      newErrors.email = "Ongeldig e-mailadres";
    if (formData.wachtwoord.length < 6)
      newErrors.wachtwoord = "Wachtwoord moet minimaal 6 tekens zijn";
    if (formData.wachtwoord !== formData.bevestigWachtwoord)
      newErrors.bevestigWachtwoord = "Wachtwoorden komen niet overeen";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

const emailExists = existingUsers.some(
  (user) => user.email === formData.email
);
const usernameExists = existingUsers.some(
  (user) => user.gebruikersnaam === formData.gebruikersnaam
);

if (emailExists) {
  alert("E-mailadres is al geregistreerd");
  return;
}

if (usernameExists) {
  alert("Gebruikersnaam is al in gebruik");
  return;
}


      const hashedPassword = bcrypt.hashSync(formData.wachtwoord, 10);

      const newUser = {
        gebruikersnaam: formData.gebruikersnaam,
        email: formData.email,
        wachtwoord: hashedPassword,
      };

      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      alert("Registratie succesvol! Je kunt nu inloggen.");
      navigate("/login");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Registreren</h2>

        <label>Gebruikersnaam</label>
        <input
          type="text"
          name="gebruikersnaam"
          value={formData.gebruikersnaam}
          onChange={handleChange}
        />
        {errors.gebruikersnaam && (
          <span className="error">{errors.gebruikersnaam}</span>
        )}

        <label>E-mailadres</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Wachtwoord</label>
        <input
          type="password"
          name="wachtwoord"
          value={formData.wachtwoord}
          onChange={handleChange}
        />
        {errors.wachtwoord && (
          <span className="error">{errors.wachtwoord}</span>
        )}

        <label>Bevestig Wachtwoord</label>
        <input
          type="password"
          name="bevestigWachtwoord"
          value={formData.bevestigWachtwoord}
          onChange={handleChange}
        />
        {errors.bevestigWachtwoord && (
          <span className="error">{errors.bevestigWachtwoord}</span>
        )}

        <button type="submit">Registreren</button>
      </form>
    </div>
  );
}
