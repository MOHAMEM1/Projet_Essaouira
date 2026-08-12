import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Anchor, Music, Sun, Info, Map as MapIcon, Utensils, Bed } from 'lucide-react';

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
        <div className="city-hero-bg" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Essaouira_Morocco.jpg/1920px-Essaouira_Morocco.jpg")' }}></div>
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
            Guide Complet : Histoire, Culture et Séjour.
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
              Anciennement connue sous le nom de Mogador, Essaouira est une ville portuaire exceptionnelle 
              située sur la côte atlantique du Maroc. Sa médina fortifiée, classée au patrimoine mondial 
              de l'UNESCO, est protégée par de grandioses remparts (la Skala) du 18ème siècle, offrant une vue imprenable sur l'océan.
            </p>
          </div>
          <div className="intro-images">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Essaouira_-_Medina_1.jpg/800px-Essaouira_-_Medina_1.jpg" alt="Médina d'Essaouira" className="img-feature" />
          </div>
        </motion.section>

        {/* Tourist Guide Section */}
        <section className="guide-section">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Planifiez votre Séjour
          </motion.h2>
          
          <div className="guide-grid">
            <motion.div className="guide-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="guide-icon"><Utensils size={30} /></div>
              <h3>Gastronomie</h3>
              <p>Mangez des sardines et dorades grillées fraîches directement sur le port, ou dégustez un tagine de poisson dans les ruelles de la médina.</p>
            </motion.div>
            
            <motion.div className="guide-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="guide-icon"><Bed size={30} /></div>
              <h3>Hébergement</h3>
              <p>Privilégiez les Riads traditionnels à l'intérieur de la médina pour une expérience authentique. Pour les surfeurs, les auberges vers Sidi Kaouki sont parfaites.</p>
            </motion.div>

            <motion.div className="guide-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="guide-icon"><Info size={30} /></div>
              <h3>Climat & Transports</h3>
              <p>Le climat est doux toute l'année ("La Cité des Alizés"). Accessible via bus (Supratours/CTM) depuis Marrakech (3h de route) ou par l'aéroport local.</p>
            </motion.div>
          </div>
        </section>

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
            <div className="feature-card">
              <div className="feature-icon"><Anchor size={40} /></div>
              <h3>Le Port & La Skala</h3>
              <p>L'un des endroits les plus animés. Observez les barques bleues et les remparts fortifiés remplis de canons en laiton.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Music size={40} /></div>
              <h3>Festival Gnaoua</h3>
              <p>Chaque année en juin, la ville vibre au rythme de la musique Gnaoua, attirant des artistes du monde entier pour un festival unique.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Sun size={40} /></div>
              <h3>Spots de Surf</h3>
              <p>Les vents puissants font d'Essaouira un spot mondialement connu pour le Kitesurf et le Windsurf (notamment la plage principale).</p>
            </div>
          </div>
        </section>

        {/* Google Maps Interactive */}
        <section className="map-section">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Carte de la Ville
          </motion.h2>
          <motion.div 
            className="map-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13410.605335028447!2d-9.775878491873866!3d31.510344405333534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9a4e9f588ccf%3A0x57421a176d5d7d30!2sEssaouira%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1714567890123!5m2!1sen!2sfr" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '20px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Essaouira"
            ></iframe>
          </motion.div>
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Essaouira_port_2.jpg/800px-Essaouira_port_2.jpg" alt="Essaouira Port" className="gallery-img" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Essaouira_street.jpg/800px-Essaouira_street.jpg" alt="Ruelle Essaouira" className="gallery-img" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Morocco_Essaouira_ramparts.jpg/800px-Morocco_Essaouira_ramparts.jpg" alt="Remparts Essaouira" className="gallery-img" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Essaouira_beach_2.jpg/800px-Essaouira_beach_2.jpg" alt="Plage Essaouira" className="gallery-img" />
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Essaouira;
