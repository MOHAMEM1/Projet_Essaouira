import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mountain, TreePine, Map, Utensils, Info, Bed, Sun, Compass } from 'lucide-react';

const Tinghir = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Assole_in_Tinghir.jpg",
      title: "La Palmeraie Verdoyante",
      desc: "Une oasis majestueuse qui s'étend sur 30 kilomètres, offrant un contraste saisissant avec les montagnes arides environnantes. C'est le poumon agricole de la région."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Kasbha_Tinghir_Todra_Morocco_-_panoramio_%282%29.jpg",
      title: "La Kasbah Ancienne",
      desc: "Les anciennes habitations fortifiées en pisé (terre crue) dominent la vallée. Bien que certaines soient en ruine, elles témoignent de l'ingéniosité architecturale berbère ancienne."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/1/14/Morocco_Gorges_du_Todra_20110321_1.jpg",
      title: "Les Gorges du Todra",
      desc: "À 15 km du centre, ces canyons calcaires atteignent 300 mètres de hauteur. L'oued (rivière) glacé qui y coule rend cet endroit parfait pour se rafraîchir en été."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="page-tinghir"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="image-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="image-modal-content tinghir-modal"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal-btn" onClick={() => setSelectedImage(null)}>✕</button>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button className="btn-back-absolute" onClick={() => navigate('/')}>
        <ArrowLeft size={24} /> Retour
      </button>

      {/* Hero Parallax */}
      <div className="city-hero">
        <div className="city-hero-bg" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/c/ca/Kasbha_Tinghir_Todra_Morocco_-_panoramio_%282%29.jpg")' }}></div>
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
            La splendeur de l'Atlas et la majesté de l'Oasis
          </motion.p>
        </div>
      </div>

      <div className="city-container">
          
        {/* Widget Section */}
        <div className="widgets-row">
            <motion.div className="widget-card tinghir-widget" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Sun size={35} color="#e67e22" />
                <div>
                    <h4>Météo Actuelle</h4>
                    <p>30°C - Grand Soleil (Chaud et Sec)</p>
                </div>
            </motion.div>
            <motion.div className="widget-card tinghir-widget" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }}>
                <Compass size={35} color="#27ae60" />
                <div>
                    <h4>Activité Populaire</h4>
                    <p>Escalade & Trekking dans les Gorges</p>
                </div>
            </motion.div>
        </div>

        {/* Intro Section */}
        <motion.section 
          className="section-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          <div className="intro-text">
            <h2>Un joyau dans le sud marocain</h2>
            <p>
              Tinghir est une ville fascinante située au centre-est du Maroc. 
              Connue mondialement pour sa palmeraie verdoyante qui serpente sur plus de 30 kilomètres et pour 
              les impressionnantes Gorges du Todra, c'est un point de rencontre magique entre la nature aride 
              et la culture amazighe millénaire.
            </p>
          </div>
          <div className="intro-images">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Assole_in_Tinghir.jpg" alt="Palmeraie Tinghir" className="img-feature" />
          </div>
        </motion.section>

        {/* Timeline Itinerary */}
        <section className="timeline-section">
            <motion.h2 className="section-title" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                Itinéraire Conseillé (2 Jours)
            </motion.h2>
            <div className="timeline">
                <motion.div className="timeline-item" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="timeline-dot tinghir-dot">1</div>
                    <div className="timeline-content">
                        <h3>Jour 1 : Oasis & Palmeraie</h3>
                        <p>Balade à pied dans la palmeraie luxuriante, découverte des anciens systèmes d'irrigation et visite des ruines du Ksar de Tinghir.</p>
                    </div>
                </motion.div>
                <motion.div className="timeline-item" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }}>
                    <div className="timeline-dot tinghir-dot">2</div>
                    <div className="timeline-content">
                        <h3>Jour 2 : Les Gorges du Todra</h3>
                        <p>Prenez la route vers les Gorges. Marchez entre les falaises de 300m de haut, pique-nique au bord de la rivière et baignade fraîche.</p>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Tourist Guide Section */}
        <section className="guide-section">
          <motion.h2 className="section-title" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Infos Pratiques
          </motion.h2>
          
          <div className="guide-grid glass-grid">
            <motion.div className="guide-card glass-card tinghir-style" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="guide-icon"><Utensils size={30} /></div>
              <h3>Gastronomie</h3>
              <p>Savourez le véritable Tajine berbère cuit lentement sur le feu de bois et profitez du thé à la menthe accompagné de dattes locales.</p>
            </motion.div>
            
            <motion.div className="guide-card glass-card tinghir-style" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="guide-icon"><Bed size={30} /></div>
              <h3>Hébergement</h3>
              <p>Passez la nuit dans une Maison d'hôtes traditionnelle ou une véritable Kasbah en pisé surplombant la grande oasis.</p>
            </motion.div>

            <motion.div className="guide-card glass-card tinghir-style" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="guide-icon"><Info size={30} /></div>
              <h3>Climat & Transports</h3>
              <p>Accessible en voiture ou en bus depuis Ouarzazate. Prévoyez des vêtements très légers en été et un gros manteau pour les nuits d'hiver (il fait froid dans l'Atlas !).</p>
            </motion.div>
          </div>
        </section>

        {/* Google Maps Interactive */}
        <section className="map-section">
          <motion.h2 className="section-title" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Carte Interactive
          </motion.h2>
          <motion.div className="map-container glass-map" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54203.74312683072!2d-5.568471275990234!3d31.517395029094034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0ac2822557e101%3A0xe7a56113b28b7074!2sTinghir%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1714567999999!5m2!1sen!2sfr" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Tinghir"
            ></iframe>
          </motion.div>
        </section>

        {/* Gallery */}
        <section className="gallery-section">
          <motion.h2 className="section-title" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Galerie Visuelle (Cliquez pour découvrir)
          </motion.h2>
          
          <div className="gallery-grid">
            {galleryData.map((img, index) => (
                <motion.div 
                  key={index} 
                  className="gallery-item-wrapper"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img.src} alt={img.title} className="gallery-img glass-img interactive-img" />
                  <div className="img-overlay-hint">
                    <Info size={24} color="white" />
                  </div>
                </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Tinghir;
