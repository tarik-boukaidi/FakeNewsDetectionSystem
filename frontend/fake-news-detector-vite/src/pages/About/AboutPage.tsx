import React from 'react';
import './AboutPage.css';
import Header from '../../components/Header/Header';
import { FaGithub } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <>
    <Header/>
    <div className="about-page">
      <h1>À propos du projet</h1>

      <section className="about-section">
        <h2>À propos du projet</h2>
        <p>Ce projet de détection de fausses nouvelles vise à fournir un outil simple et efficace pour évaluer la fiabilité des informations en ligne.</p>
      </section>

      <section className="about-section">
        <h2>Comment ça marche ?</h2>
        <p>Notre système utilise des algorithmes avancés (qui seront bientôt intégrés via une API AWS Lambda et SageMaker) pour analyser le texte que vous soumettez. Il évalue divers indicateurs linguistiques et structurels pour déterminer la probabilité qu'une nouvelle soit fausse ou réelle.</p>
        <p>Pour l'instant, les résultats sont simulés pour vous donner un aperçu du fonctionnement.</p>
      </section>

      <section className="about-section">
        <h2>Informations sur le modèle</h2>
        <p>Le modèle final sera entraîné sur un vaste ensemble de données d'articles de presse vérifiés et non-vérifiés, couvrant une large gamme de sujets. Plus de détails seront fournis lors de l'intégration de l'API réelle.</p>
      </section>

<section className="about-section">
  <h2>L'équipe</h2>
  <p>
    Ce projet est développé par : <br/>
    <div className='links'>
          <a href="https://github.com/chamai1" target="_blank" rel="noopener noreferrer"><span className='github-icon'><FaGithub /></span>
      MENOUAR CHAIMA 
    </a>
    <a href="https://github.com/ae-saouiqui" target="_blank" rel="noopener noreferrer"><span className='github-icon'><FaGithub /></span>
      AMINE ES-SAOUIQUI
    </a>
    <a href="https://github.com/tarik-boukaidi" target="_blank" rel="noopener noreferrer"><span className='github-icon'><FaGithub /></span>
      TARIK BOUKAIDI 
    </a>
    </div>
  </p>
</section>
    </div>
    </>
  );
};

export default AboutPage;
