import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Anchor, Music, Sun, Camera, Waves } from 'lucide-react';

const Essaouira = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      className="page-essaouira"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
    >
      <button className="btn-back-absolute" onClick={() => navigate('/')}>
        <ArrowLeft size={24} /> Retour
      </button>

      {/* Hero Parallax */}
      <div className="city-hero">
        <div className="city-hero-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1596720235372-2435e1a1b184?auto=format&fit=crop&q=60&w=1920")' }}></div>
        <div className="city-hero-content">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Essaouira
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Le joyau bleu de l'Atlantique, riche en histoire et en culture.
          </motion.p>
        </div>
      </div>

      <div className="city-container">
        {/* Intro Section */}
        <motion.section 
          className="section-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="intro-text">
            <h2>Une ville hors du temps</h2>
            <p>
              Classée au patrimoine mondial de l'UNESCO, Essaouira (anciennement Mogador) 
              est une ville fortifiée unique. Ses remparts de style Vauban, ses maisons blanches 
              aux volets bleus et son ambiance décontractée en font une destination incontournable.
            </p>
          </div>
          <div className="intro-images">
            <img src="https://images.unsplash.com/photo-1576063628373-107f9c2d1590?auto=format&fit=crop&q=60&w=600" alt="Médina d'Essaouira" className="img-feature" />
          </div>
        </motion.section>

        {/* Features Grid */}
        <section className="features-section">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            À Découvrir
          </motion.h2>
          
          <div className="features-grid">
            <motion.div className="feature-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="feature-icon"><Anchor size={40} /></div>
              <h3>Le Port de Pêche</h3>
              <p>L'un des endroits les plus animés. Observez les bateaux bleus traditionnels et dégustez des fruits de mer frais.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="feature-icon"><Music size={40} /></div>
              <h3>Festival Gnaoua</h3>
              <p>Chaque année en juin, la ville vibre au rythme de la musique Gnaoua, attirant des artistes du monde entier.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="feature-icon"><Waves size={40} /></div>
              <h3>Sports Nautiques</h3>
              <p>Les vents puissants (les alizés) font d'Essaouira un spot mondialement connu pour le Kitesurf et le Windsurf.</p>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="gallery-section">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Galerie Visuelle
          </motion.h2>
          
          <div className="gallery-grid">
            <img src="https://images.unsplash.com/photo-1627993357567-33a41b5a5b51?auto=format&fit=crop&q=60&w=600" alt="Essaouira Plage" className="gallery-img" />
            <img src="https://images.unsplash.com/photo-1549405230-0f5da48d5918?auto=format&fit=crop&q=60&w=600" alt="Ruelle Essaouira" className="gallery-img" />
            <img src="https://images.unsplash.com/photo-1596720188686-302efdf479b1?auto=format&fit=crop&q=60&w=600" alt="Remparts Essaouira" className="gallery-img" />
            <img src="https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&q=60&w=600" alt="Port Essaouira" className="gallery-img" />
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Essaouira;
