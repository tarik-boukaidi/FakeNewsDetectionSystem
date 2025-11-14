import React from 'react';
import './CallToAction.css';
import { Link } from 'react-router-dom'; // Import de Link

const CallToAction: React.FC = () => {
  return (
    <section className="cta-section">
      <h2>Prêt à vérifier les faits ?</h2>
      <Link to="/analyse" className="cta-button-link">
        <button className="cta-button">Commencer Maintenant</button>
      </Link>
    </section>
  );
};

export default CallToAction;
