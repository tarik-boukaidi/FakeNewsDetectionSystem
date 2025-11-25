import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMotionValue } from 'framer-motion'; 
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import CheckIcon from '../../components/CheckIcon/CheckIcon';
import LoadingIcon from '../../assets/Double Ring@1x-1.0s-734px-734px.gif'
import './AnalysisPage.css';

const AnalysisPage: React.FC = () => {
  // Setting the API VARAIABLE
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate(); 
  const content  = useRef<HTMLTextAreaElement>(null);
  const [open,setOpen]  = useState(false);
  const [loading, setLoading] = useState(false);
  const handleBackClick = () => {
    navigate('/'); 
  };
  let progress = useMotionValue(100);

  const resetText = () => {
    content.current.value='';
  }
  const [confidenceScore,setConfidenceScore] = useState(0);

  const [prediction, setPrediction] = useState<number | null>(null);

const makePrediction = () => {
  setLoading(true);
  fetch(API_URL + "/predictions", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: content.current?.value,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.predictions);
      setPrediction(data.predictions); 
      setConfidenceScore(data.confidence_score);
      setOpen(true); 
    })
    .catch((err) => {
      console.error("Error:", err);
    }).finally(()=> setLoading(false));
};
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
  onClick={makePrediction}>Analyser</button>
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
      status={prediction === 1 ? "real" : "fake"}
    />
    <p
      style={{
        background:
          (prediction === 1)
            ? "linear-gradient(to right, #4caf50, #66bb6a, #81c784)"
            : "linear-gradient(to right, #ff4444, #ff6666, #ff8888)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      La nouvelle est : {prediction === 1 ? "Vraie" : "Fausse"}
    </p>
    <p style={{ backgroundColor : (prediction === 1 ) ? "#66bb6a" : "#ff4444",
      padding: "10px",
      color: "#eee",
      borderRadius:"40px",
      fontWeight: "900"
    }}>Confidence Score: {confidenceScore * 100}%</p>
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
          <div className="progress-bar" style={{ width:  `${(confidenceScore * 100)}%` ,backgroundColor: (prediction === 1 ) ? "#66bb6a" : "#ff4444"}}></div> 
        </div>
        <p>Confidence Score: {confidenceScore * 100} %</p>
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
    {loading && (
  <div className="loading-overlay">
    <div className="loading-bg"></div>
    <img src={LoadingIcon} alt="Loading..." className="loading-gif"  width="198px" height="198px"/>
  </div>
)}

    </>
  );
};

export default AnalysisPage;
