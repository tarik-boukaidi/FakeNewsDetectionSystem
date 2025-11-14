import React from 'react';
import './FeaturesSection.css';
import { Icon } from '../Icon/Icon'; // Import du composant Icon
import { FaLightbulb, FaShieldAlt } from 'react-icons/fa'; // Import des icônes

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <div className="feature-card">
        <div className="icon-wrapper">
          <Icon as={FaLightbulb} className="feature-icon" />
        </div>
        <h2>Intelligent</h2>
        <p>Consultez et gérez l'historique de vos analyses, avec des options de tri et de filtrage.</p>
      </div>
      <div className="feature-card">
        <div className="icon-wrapper">
          <Icon as={FaShieldAlt} className="feature-icon" />
        </div>
        <h2>Confiance</h2>
        <p>Obtenez un score de fiabilité précis en pourcentage pour chaque analyse effectuée.</p>
      </div>
    </section>
  );
};

export default FeaturesSection;
