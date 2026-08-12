import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mountain, TreePine, Map, Camera } from 'lucide-react';

const Tinghir = () => {
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
      className="page-tinghir"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.6 }}
    >
      <button className="btn-back-absolute" onClick={() => navigate('/')}>
        <ArrowLeft size={24} /> Retour
      </button>

      {/* Hero Parallax */}
      <div className="city-hero">
        <div className="city-hero-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=60&w=1920")' }}></div>
        <div className="city-hero-content">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Tinghir
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            La splendeur de l'Atlas et la majesté de l'Oasis.
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
            <h2>Un joyau dans le sud marocain</h2>
            <p>
              Tinghir est une ville fascinante située au centre-est du Maroc. Connue pour 
              sa palmeraie luxuriante qui s'étend sur des kilomètres et ses immenses gorges, 
              c'est un lieu où la nature brute rencontre la culture amazighe millénaire.
            </p>
          </div>
          <div className="intro-images">
            <img src="https://images.unsplash.com/photo-1623910271101-9a9ec2b10ab8?auto=format&fit=crop&q=60&w=600" alt="Palmeraie Tinghir" className="img-feature" />
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
            <motion.div className="feature-card tinghir-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="feature-icon"><Mountain size={40} /></div>
              <h3>Gorges du Todra</h3>
              <p>Des falaises calcaires spectaculaires atteignant jusqu'à 300 mètres de haut, prisées par les grimpeurs du monde entier.</p>
            </motion.div>

            <motion.div className="feature-card tinghir-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="feature-icon"><TreePine size={40} /></div>
              <h3>L'Oasis</h3>
              <p>Une bande de verdure incroyable au milieu d'un paysage aride, abritant des dattiers, des oliviers et des cultures traditionnelles.</p>
            </motion.div>

            <motion.div className="feature-card tinghir-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="feature-icon"><Map size={40} /></div>
              <h3>Kasbahs Anciennes</h3>
              <p>Explorez les ruines des anciennes forteresses en pisé qui témoignent de l'histoire riche de la région.</p>
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
            <img src="https://images.unsplash.com/photo-1549405230-0f5da48d5918?auto=format&fit=crop&q=60&w=600" alt="Tinghir" className="gallery-img" />
            <img src="https://images.unsplash.com/photo-1542104574-89c09cda3b20?auto=format&fit=crop&q=60&w=600" alt="Gorges" className="gallery-img" />
            <img src="https://images.unsplash.com/photo-1522238386121-6927dcc34d40?auto=format&fit=crop&q=60&w=600" alt="Oasis" className="gallery-img" />
            <img src="https://images.unsplash.com/photo-1582239454153-f725a3d077b0?auto=format&fit=crop&q=60&w=600" alt="Atlas" className="gallery-img" />
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Tinghir;
