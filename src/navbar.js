import React, { useState, useEffect } from 'react';
import { Router, Link } from "@reach/router";
import './Navbar.css';
import logoImage from './img/logo.png'; // Pfade zum Bild anpassen
const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <Link to="/">
        <img src={logoImage} alt="Logo" className="logo" />
      </Link>
      <div className="buttons">
        <button>Anmelden</button>
        <button>Registrieren</button>
      </div>
    </div>
  );
};

export default Navbar;
