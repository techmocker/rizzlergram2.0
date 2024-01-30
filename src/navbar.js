// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from "@reach/router";
import './Navbar.css';
import logoImage from './img/logo.png';
import Anmeldung from './Anmeldung.js';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isAnmeldungOpen, setAnmeldungOpen] = useState(false);
  const [isRegistrierenOpen, setRegistrierenOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openAnmeldung = () => {
    setAnmeldungOpen(true);
    setRegistrierenOpen(false);
  };

  const openRegistrieren = () => {
    setAnmeldungOpen(false);
    setRegistrierenOpen(true);
  };

  const closeAnmeldungRegistrieren = () => {
    setAnmeldungOpen(false);
    setRegistrierenOpen(false);
  };

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <Link to="/">
        <img src={logoImage} alt="Logo" className="logo" />
      </Link>
      <div className="buttons">
        <button onClick={openAnmeldung}>Anmelden</button>
        <button onClick={openRegistrieren}>Registrieren</button>
      </div>
      {(isAnmeldungOpen || isRegistrierenOpen) && (
        <Anmeldung
          isOpen={isAnmeldungOpen || isRegistrierenOpen}
          onClose={closeAnmeldungRegistrieren}
          action={isRegistrierenOpen ? 'register' : 'login'}
        />
      )}
    </div>
  );
};

export default Navbar;
