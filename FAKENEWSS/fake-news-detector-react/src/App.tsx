import React from 'react';
import './App.css';
import background from './assets/background1.png'; // Correction du chemin
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnalysisPage from './pages/AnalysisPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  // Injecte la variable CSS pour l'image de fond
  React.useEffect(() => {
    document.documentElement.style.setProperty('--global-background-image', `url(${background})`);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analyse" element={<AnalysisPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
