import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <main>
      <section className="hero">
        <h1>Détection de <span className="highlight">Fausses Nouvelles</span></h1>
        <p className='catching-text'>Démêlez le vrai du faux avec notre outil d'analyse intelligent.</p>
        <Link to="/analyse" className="start-analysis-link">
          <button className="start-analysis">Démarrer l'Analyse</button>
        </Link>
      </section>
    </main>
  );
};

export default Hero;
