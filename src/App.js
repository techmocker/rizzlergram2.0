// App.js
import React, { useState } from 'react';
import Navbar from './navbar.js';
import './App.css';
import ProfileImage from './img/profile.jpg';

// Beispiel Popup-Komponente
const ImagePopup = ({ imageUrl, altText, onClose }) => (
  <div className="popup">
    <span className="close" onClick={onClose}>&times;</span>
    <img src={imageUrl} alt={altText} />
  </div>
);

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePopup = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="profile-container">
        {/* Profilheader */}
        <div className="profile-header">
          {/* Profilbild */}
          <div className="profile-image">
            <img src={ProfileImage} alt="Profilbild" className="logo" />
          </div>
          {/* Profilinformationen */}
          <div className="profile-info">
            <h3 className="profile-username">derkevinagain</h3>
            <div className="profile-buttons">
              <button>Folgen</button>
              <button>Nachricht senden</button>
              <button>Mehr</button>
            </div>
            <div className="profile-stats">
              <button>5 Beiträge</button>
              <button>1933 Follower</button>
              <button>516 Gefolgt</button>
            </div>
            <div className="profile-describe">
              <p>Losem</p>
              <p>Sie gönnen mit den Lippen, aber hassen mit dem Herz. ♥️.</p>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="image-grid">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="grid-item">
              <img
                src={`sponge${index}.png`}
                alt={`Bild ${index}`}
                onClick={() => openImagePopup(`sponge${index}.png`)}
              />
            </div>
          ))}
        </div>

        {/* Popup anzeigen, wenn ein Bild ausgewählt ist */}
        {selectedImage && (
          <ImagePopup
            imageUrl={selectedImage}
            altText={`Ausgewähltes Bild`}
            onClose={closeImagePopup}
          />
        )}
      </div>
    </div>
  );
}

export default App;
