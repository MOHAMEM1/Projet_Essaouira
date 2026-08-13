import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Anchor, Music, Sun, Info, Map as MapIcon, Utensils, Bed, CloudSun, Calendar } from 'lucide-react';

const Essaouira = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = [
    {
      src: import.meta.env.BASE_URL + "images/essaouira/1.jpg",
      title: "La Médina Fortifiée",
      desc: "Classée au patrimoine mondial de l'UNESCO, la médina d'Essaouira est un exemple exceptionnel de ville fortifiée du milieu du XVIIIe siècle, entourée d'une muraille de style Vauban."
    },
    {
      src: import.meta.env.BASE_URL + "images/essaouira/2.jpg",
      title: "La Skala de la Kasbah",
      desc: "Cette plateforme d'artillerie impressionnante défendait la ville contre les attaques maritimes. Ses canons en bronze espagnols sont toujours pointés vers l'océan Atlantique. Elle a servi de décor pour Astapor dans Game of Thrones."
    },
    {
      src: import.meta.env.BASE_URL + "images/essaouira/3.jpg",
      title: "Les Ruelles Bleues",
      desc: "L'architecture d'Essaouira se caractérise par ses murs blancs éclatants et ses portes et volets peints en bleu, créant une atmosphère apaisante et photogénique."
    },
    {
      src: import.meta.env.BASE_URL + "images/essaouira/4.jpg",
      title: "Le Port de Pêche",
      desc: "L'un des ports les plus animés du Maroc. On y voit des dizaines de barques bleues traditionnelles et on peut y déguster du poisson grillé fraîchement pêché."
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
      className="page-essaouira"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
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
              className="image-modal-content"
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
        {/* Real Essaouira Image */}
        <div className="city-hero-bg" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ea/%22Breite_Mauern_sch%C3%BCtzen_die_Bev%C3%B6lkerung_von_Essaouira.%22_08.jpg")' }}></div>
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
            La Cité des Alizés : Guide Touristique Complet
          </motion.p>
        </div>
      </div>

      <div className="city-container">
        
        {/* Widget Section */}
        <div className="widgets-row">
            <motion.div className="widget-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <CloudSun size={35} color="#f1c40f" />
                <div>
                    <h4>Météo Actuelle</h4>
                    <p>22°C - Ensoleillé avec vent</p>
                </div>
            </motion.div>
            <motion.div className="widget-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }}>
                <Calendar size={35} color="#3498db" />
                <div>
                    <h4>Meilleure Période</h4>
                    <p>Avril à Octobre (Idéal pour le Surf)</p>
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
            <h2>Une ville fortifiée face à l'océan</h2>
            <p>
              Mogador (l'ancien nom d'Essaouira) est célèbre pour ses remparts historiques, ses portes monumentales et sa médina blanche et bleue inscrite au patrimoine de l'UNESCO. 
              C'est la destination parfaite pour les amateurs de culture, de fruits de mer frais, et de sports nautiques.
            </p>
          </div>
          <div className="intro-images">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/%22Drehort_f%C3%BCr_viele_Filme_und_Serien%22._06.jpg" alt="Remparts Essaouira" className="img-feature" />
          </div>
        </motion.section>

        {/* Timeline Itinerary */}
        <section className="timeline-section">
            <motion.h2 className="section-title" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                Itinéraire Conseillé (3 Jours)
            </motion.h2>
            <div className="timeline">
                <motion.div className="timeline-item" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="timeline-dot">1</div>
                    <div className="timeline-content">
                        <h3>Jour 1 : La Médina & La Skala</h3>
                        <p>Promenade dans les ruelles bleues de la médina, visite des remparts de la Skala (où a été filmé Game of Thrones) et coucher de soleil sur l'océan.</p>
                    </div>
                </motion.div>
                <motion.div className="timeline-item" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }}>
                    <div className="timeline-dot">2</div>
                    <div className="timeline-content">
                        <h3>Jour 2 : Port & Poisson Frais</h3>
                        <p>Visitez le port animé le matin, observez la criée, puis choisissez votre poisson frais pour le faire griller directement dans les petits stands.</p>
                    </div>
                </motion.div>
                <motion.div className="timeline-item" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.4 }}>
                    <div className="timeline-dot">3</div>
                    <div className="timeline-content">
                        <h3>Jour 3 : Plage & Sports Nautiques</h3>
                        <p>Profitez du vent constant (les alizés) pour prendre un cours de Kitesurf à la grande plage, ou faites une balade à cheval sur le sable.</p>
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
            <motion.div className="guide-card glass-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="guide-icon"><Utensils size={30} /></div>
              <h3>Gastronomie</h3>
              <p>Mangez des sardines et dorades grillées fraîches directement sur le port, ou dégustez un tagine de poisson dans les ruelles de la médina.</p>
            </motion.div>
            
            <motion.div className="guide-card glass-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="guide-icon"><Bed size={30} /></div>
              <h3>Hébergement</h3>
              <p>Privilégiez les Riads traditionnels à l'intérieur de la médina pour une expérience authentique. Pour les surfeurs, les auberges vers Sidi Kaouki sont parfaites.</p>
            </motion.div>

            <motion.div className="guide-card glass-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="guide-icon"><Info size={30} /></div>
              <h3>Transports</h3>
              <p>Accessible via bus (Supratours/CTM) depuis Marrakech (3h de route). La ville se visite presque entièrement à pied (sans voiture intra-muros).</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13410.605335028447!2d-9.775878491873866!3d31.510344405333534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9a4e9f588ccf%3A0x57421a176d5d7d30!2sEssaouira%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1714567890123!5m2!1sen!2sfr" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Essaouira"
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

export default Essaouira;
