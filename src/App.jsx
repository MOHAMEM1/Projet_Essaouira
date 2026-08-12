import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Compass, Sun, Anchor, ArrowLeft } from 'lucide-react';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const CITIES = [
    {
      id: 'essaouira',
      name: 'Essaouira',
      image: 'https://images.unsplash.com/photo-1577971132997-1f2e16d4453f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'tinghir',
      name: 'Tinghir',
      image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800',
    }
  ];

  const EssaouiraPage = () => (
    <motion.div 
      className="detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button className="btn-back" onClick={() => setSelectedCity(null)}>
        <ArrowLeft size={20} /> Retour
      </button>

      <div className="detail-hero">
        <motion.img 
          src="https://images.unsplash.com/photo-1596720235372-2435e1a1b184?auto=format&fit=crop&q=80&w=1920" 
          alt="Essaouira Panorama" 
          className="detail-hero-bg"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
        />
        <div className="detail-hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: '4.5rem', marginBottom: '10px' }}
          >
            Essaouira
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ color: '#fff' }}
          >
            La Cité des Alizés - Un mélange unique d'histoire, d'art et d'océan.
          </motion.p>
        </div>
      </div>

      <div className="content-section">
        <motion.div className="info-card glass-panel" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <div className="icon-wrapper">
            <MapPin size={30} />
          </div>
          <h3>La Médina</h3>
          <p>Classée au patrimoine mondial de l'UNESCO, arpentez ses ruelles blanches et bleues remplies d'histoire et d'artisans talentueux.</p>
        </motion.div>

        <motion.div className="info-card glass-panel" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <div className="icon-wrapper">
            <Anchor size={30} />
          </div>
          <h3>Le Port</h3>
          <p>Un lieu vibrant d'activité, célèbre pour ses barques bleues traditionnelles, ses mouettes et la vente de poisson frais.</p>
        </motion.div>

        <motion.div className="info-card glass-panel" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
          <div className="icon-wrapper">
            <Sun size={30} />
          </div>
          <h3>La Plage & Surf</h3>
          <p>Le paradis des amateurs de sports nautiques. Le vent constant (les alizés) en fait le spot idéal pour le kitesurf et la planche à voile.</p>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {!selectedCity ? (
          <motion.div 
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <header className="hero-section">
              <motion.h1 
                className="hero-title"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                GUIDE RÉGIONAL INTERACTIF
              </motion.h1>
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Découvrez les richesses culturelles et touristiques de nos villes. 
                Choisissez votre destination pour commencer l'exploration.
              </motion.p>
            </header>

            <main className="cities-grid">
              {CITIES.map((city, index) => (
                <motion.div 
                  key={city.id}
                  className="city-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.2) }}
                >
                  <img src={city.image} alt={city.name} className="city-image" />
                  <div className="city-overlay">
                    <h2 className="city-name">{city.name}</h2>
                    <button 
                      className="btn-explore"
                      onClick={() => {
                        if (city.id === 'essaouira') {
                          setSelectedCity('essaouira');
                        } else {
                          alert("La page de Tinghir est en cours de construction ! Essayez Essaouira.");
                        }
                      }}
                    >
                      Explorer
                    </button>
                  </div>
                </motion.div>
              ))}
            </main>
          </motion.div>
        ) : (
          <EssaouiraPage key="essaouira" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
