import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero'; /* Nous garderons le Hero de la première capture d'écran ici */
import ServicesSection from '../components/ServicesSection'; // Import du nouveau composant
import FeaturesSection from '../components/FeaturesSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection'; // Import du composant d'animation
import './HomePage.css'; // Pour les styles spécifiques à la page d'accueil

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Header />
      <AnimatedSection animation="zoomIn" duration="1s" delay="0.2s">
        <Hero />
      </AnimatedSection>
      <AnimatedSection animation="zoomIn" duration="1s" delay="0.4s">
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection animation="zoomIn" duration="1s" delay="0.6s">
        <FeaturesSection />
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp" duration="1s" delay="0.8s">
        <CallToAction />
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp" duration="1s" delay="1s">
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
