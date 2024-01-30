// Anmeldung.js
import React, { useState } from 'react';
import './login.css';

const Anmeldung = ({ isOpen, onClose, action }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleAction = () => {
    // Hier kannst du die Logik für Anmeldung oder Registrierung hinzufügen
    console.log(`Benutzername: ${username}, Passwort: ${password}, Email: ${email}`);
    // Zum Beispiel: Hier könntest du eine API-Anfrage für die Anmeldung/Registrierung senden
    // und die Antwort verarbeiten. Für dieses Beispiel wird nur eine Ausgabe in der Konsole gemacht.
    onClose(); // Schließe das Popup nach der Aktion
  };

  return (
    <div className={isOpen ? 'login-popup' : 'hidden'}>
      {isOpen && (
        <div className="login-form">
          <label htmlFor="username">Benutzername:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Passwort:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {action === 'register' && (
            <>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          )}

          <button onClick={handleAction}>
            {action === 'register' ? 'Registrieren' : 'Anmelden'}
          </button>
        </div>
      )}
      {isOpen && (
        <button className="close-button" onClick={onClose}>
          Schließen
        </button>
      )}
    </div>
  );
};

export default Anmeldung;
