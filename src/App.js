import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Epic Palworld GameServer.
        </p>
        <a
          className="App-link"
          href="https://store.steampowered.com/app/1623730/Palworld/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Play Palworld:</p>
          Server: losem.shout.li
        </a>
      </header>
    </div>
  );
}

export default App;
