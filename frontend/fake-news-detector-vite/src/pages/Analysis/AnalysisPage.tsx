import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue } from 'framer-motion'; 
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import CheckIcon from '../../components/CheckIcon/CheckIcon';
import './AnalysisPage.css';

const AnalysisPage: React.FC = () => {
  const navigate = useNavigate(); // Initialisation de useNavigate
  const content  = useRef<HTMLTextAreaElement>(null);
  const [open,setOpen]  = useState(false);
  const handleBackClick = () => {
    navigate('/'); // Naviguer vers la page d'accueil
  };
  let progress = useMotionValue(100);

  const resetText = () => {
    content.current.value='';
  }
  const [confidenceScore,setConfidenceScore] = useState(0);

  const [prediction, setPrediction] = useState<string | null>(null);

  return (
    <>
    <Header/>
    <div className="analysis-page">
      <h1>Page d'Analyse</h1>
      {/* Contenu de la page d'analyse, y compris la zone de texte, les boutons, les résultats et l'historique */}
      <div className="analysis-section">
        <textarea placeholder="Entrez un article ou un texte à analyser ici..." ref={content} ></textarea>
        <div className="analysis-buttons">
          <button 
  className="analyze-button"
  onClick={() => {
    const result = simulatePrediction(content.current?.value || "");
    setPrediction(result.prediction);
    setConfidenceScore(result.confidence);
    setOpen(true);
  }}
>Analyser</button>
<Modal isOpen={open} onClose={() => setOpen(false)}>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <CheckIcon
      progress={progress}
      status={prediction === "Real" ? "real" : "fake"}
    />
    <p
      style={{
        background:
          prediction === "Real"
            ? "linear-gradient(to right, #4caf50, #66bb6a, #81c784)"
            : "linear-gradient(to right, #ff4444, #ff6666, #ff8888)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      La nouvelle est : {prediction === "Real" ? "Vraie" : "Fausse"}
    </p>
    <p>Confidence Score: {confidenceScore}%</p>
  </div>
</Modal>

          <button className="reset-button" onClick={resetText}>Réinitialiser</button>
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


function simulatePrediction(text: string) {
  const isFake = Math.random() > 0.5; // randomly fake or real
  const confidence = Math.floor(Math.random() * 50) + 50; // 50–100%

  return {
    prediction: isFake ? "Fake" : "Real",
    confidence
  };
}
export default AnalysisPage;
