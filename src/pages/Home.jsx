import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="split-home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="split-overlay-title">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          MAROC
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Choisissez votre destination
        </motion.p>
      </div>

      <div className="split-side essaouira-side" onClick={() => navigate('/essaouira')}>
        <div className="split-bg" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/e6/%22Drehort_f%C3%BCr_viele_Filme_und_Serien%22._06.jpg")' }}></div>
        <div className="split-content">
          <MapPin size={40} className="split-icon" />
          <h2>Essaouira</h2>
          <p className="split-desc">La cité des alizés, où l'océan rencontre l'art.</p>
          <span className="split-btn">Explorer Essaouira</span>
        </div>
      </div>

      <div className="split-side tinghir-side" onClick={() => navigate('/tinghir')}>
        <div className="split-bg" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/0/0f/Assole_in_Tinghir.jpg")' }}></div>
        <div className="split-content">
          <MapPin size={40} className="split-icon" />
          <h2>Tinghir</h2>
          <p className="split-desc">L'oasis majestueuse au cœur des montagnes de l'Atlas.</p>
          <span className="split-btn">Explorer Tinghir</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
