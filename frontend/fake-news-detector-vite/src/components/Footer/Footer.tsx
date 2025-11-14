import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; // si tu utilises react-router

const Footer: React.FC = () => {
  return (
    <footer>
      <p>© 2025 Fake News Detector. Tous droits réservés.</p>
      <div className="footer-links">
        {/* Utiliser Link si tu as des routes, sinon remplacer par <button> */}
        <Link to="/a-propos" className="footer-link">À propos</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;
