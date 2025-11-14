import React from 'react';
import './AnalysisPage.css';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate
import { useState } from 'react';
import Header from '../../components/Header/Header';

const AnalysisPage: React.FC = () => {
  const navigate = useNavigate(); // Initialisation de useNavigate

  const handleBackClick = () => {
    navigate('/'); // Naviguer vers la page d'accueil
  };
  const [confidenceScore,setConfidenceScore] = useState(0);
  return (
    <>
    <Header/>
    <div className="analysis-page">
      <h1>Page d'Analyse</h1>
      {/* Contenu de la page d'analyse, y compris la zone de texte, les boutons, les résultats et l'historique */}
      <div className="analysis-section">
        <textarea placeholder="Entrez un article ou un texte à analyser ici..."></textarea>
        <div className="analysis-buttons">
          <button className="analyze-button">Analyser</button>
          <button className="reset-button">Réinitialiser</button>
          <button className="back-button" onClick={handleBackClick}>Retour</button>
        </div>
      </div>

      <div className="result-section">
        <h2>Résultat de l'analyse</h2>
        <p>Copier le résultat</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width:  `${confidenceScore}%` }}></div> 
        </div>
        <p>Confidence Score: {confidenceScore} %</p>
      </div>

      <div className="history-section">
        <h2>Historique des analyses</h2>
        <div className="filters">
          <label>Filtrer par:
            <select>
              <option>Tout</option>
            </select>
          </label>
          <label>Trier par:
            <select>
              <option>Plus récent</option>
            </select>
          </label>
        </div>
        <div className="history-item">
          <p>Date: 07/11/2025 11:49:37</p>
          <p>Texte: cbtnyh...</p>
          <p>Résultat: FAKE (65%)</p>
        </div>
        <div className="history-item">
          <p>Date: 07/11/2025 11:49:03</p>
          <p>Texte: ghkulh...</p>
          <p>Résultat: FAKE (70%)</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AnalysisPage;
