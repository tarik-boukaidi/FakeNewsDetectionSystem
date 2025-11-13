import React from 'react';
import './ServicesSection.css';
import { Icon } from './Icon';
import { FaChartBar, FaGlobe } from 'react-icons/fa'; // Icônes d'exemple

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-intro">
        <h2 className="services-title">
          Nos Services <span className="highlight">Inclus.</span>
        </h2>
        <p className="services-description">
          Notre plateforme vous offre une suite complète d'outils pour vérifier la fiabilité des informations, combattre la désinformation et vous aider à prendre des décisions éclairées.
        </p>
      </div>
      <div className="service-cards-container">
        <div className="service-card">
          <div className="icon-wrapper">
            <Icon as={FaChartBar} className="service-icon" />
          </div>
          <h3>Analyse de Contenu</h3>
          <p>Vérifiez rapidement des articles, titres ou extraits de texte pour évaluer leur fiabilité.</p>
        </div>
        <div className="service-card">
          <div className="icon-wrapper">
            <Icon as={FaGlobe} className="service-icon" />
          </div>
          <h3>Détection en Anglais seulement</h3>
          <p>Notre système est capable d'analyser des contenus en anglais seulement.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
