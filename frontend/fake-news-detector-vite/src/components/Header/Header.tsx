import React from 'react';
import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Ajout de useLocation et useNavigate
import { FaChartBar, FaInfoCircle, FaEnvelope, FaArrowLeft } from 'react-icons/fa'; // Ajout de FaArrowLeft
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import logoclair from '../../assets/logoclair1.png'; // Nouveau logo clair
import logodark from '../../assets/logodark1.png';   // Nouveau logo sombre
import { useTheme } from '../../contexts/ThemeContext';
import { Icon } from '../Icon/Icon'; // wrapper pour TypeScript

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const currentLogo = isDarkMode ? logodark : logoclair; // Choisir le logo en fonction du mode
  const location = useLocation(); // Obtenir la location actuelle
  const navigate = useNavigate(); // Obtenir la fonction de navigation

  const handleBackClick = () => {
    if (location.pathname !== '/') {
      navigate(-1); // Revenir à la page précédente
    } else {
      navigate('/'); // Ou aller à l'accueil si déjà sur la page d'accueil
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={currentLogo} alt="Fake News Detector Logo" className="logo-image" />
        <span className="fake">FAKE</span>
        <span className="news">NEWS</span>
      </div>

      <nav>
        <ul>
          {location.pathname !== '/' && ( // Afficher le bouton Retour uniquement si pas sur la page d'accueil
            <li className='back-container'>
              <button onClick={handleBackClick} className="nav-button back-button">
                <Icon as={FaArrowLeft} className="nav-icon" /> Retour
              </button>
            </li>
          )}
          <li>
            <Link to="/analyse">
              <Icon as={FaChartBar} className="nav-icon" /> <span className='icon-text'>Analyse</span>
            </Link>
          </li>
          <li>
            <Link to="/a-propos">
              <Icon as={FaInfoCircle} className="nav-icon" /><span className='icon-text'>À propos</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Icon as={FaEnvelope} className="nav-icon" /><span className='icon-text'>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>

      <button className="mode-toggle" onClick={toggleTheme}>
        {isDarkMode ? <Icon as={BsFillSunFill} /> : <Icon as={BsFillMoonFill} />} 
      </button>
    </header>
  );
};

export default Header;
