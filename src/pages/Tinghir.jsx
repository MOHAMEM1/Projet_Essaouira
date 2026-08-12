import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mountain, TreePine, Map, Utensils, Info, Bed } from 'lucide-react';

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
        <div className="city-hero-bg" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Todgha_Gorge_-_Tinghir.jpg/1920px-Todgha_Gorge_-_Tinghir.jpg")' }}></div>
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
              Tinghir est une ville fascinante située au centre-est du Maroc, dans la région de Drâa-Tafilalet. 
              Connue mondialement pour sa palmeraie verdoyante qui serpente sur plus de 30 kilomètres et pour 
              les impressionnantes Gorges du Todra, c'est un point de rencontre magique entre la nature aride 
              et la culture amazighe millénaire.
            </p>
          </div>
          <div className="intro-images">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tinghir_Oasis_Morocco.jpg/800px-Tinghir_Oasis_Morocco.jpg" alt="Palmeraie Tinghir" className="img-feature" />
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
            <motion.div className="guide-card tinghir-style" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="guide-icon"><Utensils size={30} /></div>
              <h3>Gastronomie</h3>
              <p>Savourez le véritable Tajine berbère cuit lentement sur le feu de bois et profitez du thé à la menthe accompagné de dattes locales.</p>
            </motion.div>
            
            <motion.div className="guide-card tinghir-style" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="guide-icon"><Bed size={30} /></div>
              <h3>Hébergement</h3>
              <p>Passez la nuit dans une Maison d'hôtes traditionnelle ou une véritable Kasbah en pisé surplombant la grande oasis.</p>
            </motion.div>

            <motion.div className="guide-card tinghir-style" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="guide-icon"><Info size={30} /></div>
              <h3>Climat & Transports</h3>
              <p>Accessible en voiture ou en bus CTM/Supratours depuis Ouarzazate (2.5h) ou Errachidia. Le climat est très sec et chaud en été, doux en hiver.</p>
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
            <div className="feature-card tinghir-card">
              <div className="feature-icon"><Mountain size={40} /></div>
              <h3>Gorges du Todra</h3>
              <p>Des falaises calcaires spectaculaires atteignant jusqu'à 300 mètres de haut. Un véritable paradis pour les amateurs d'escalade et de randonnée.</p>
            </div>
            <div className="feature-card tinghir-card">
              <div className="feature-icon"><TreePine size={40} /></div>
              <h3>La Palmeraie (Oasis)</h3>
              <p>Promenez-vous à l'ombre des figuiers, grenadiers et palmiers dattiers en longeant les canaux d'irrigation (Seguias) centenaires.</p>
            </div>
            <div className="feature-card tinghir-card">
              <div className="feature-icon"><Map size={40} /></div>
              <h3>L'Ancien Ksar et Kasbahs</h3>
              <p>Explorez les ruelles étroites du vieux village abandonné (Ksar) et les Kasbahs en ruine comme celle du Glaoui, témoins du riche passé architectural.</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54203.74312683072!2d-5.568471275990234!3d31.517395029094034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0ac2822557e101%3A0xe7a56113b28b7074!2sTinghir%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1714567999999!5m2!1sen!2sfr" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '20px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Tinghir"
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Tinghir_Oasis.jpg/800px-Tinghir_Oasis.jpg" alt="Vue Tinghir" className="gallery-img" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tinerhir_gorge.jpg/800px-Tinerhir_gorge.jpg" alt="Gorges" className="gallery-img" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Kasbah_Tinghir.jpg/800px-Kasbah_Tinghir.jpg" alt="Kasbah Tinghir" className="gallery-img" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Morocco_Gorges_du_Todra_20110321_1.jpg/800px-Morocco_Gorges_du_Todra_20110321_1.jpg" alt="Todra Route" className="gallery-img" />
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Tinghir;
