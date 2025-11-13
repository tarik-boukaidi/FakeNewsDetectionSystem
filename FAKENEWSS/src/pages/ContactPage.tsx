import React from 'react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <h1>Contactez-nous</h1>

      <section className="contact-section">
        <h2>Contactez-nous</h2>
        <p>Si vous avez des questions, des commentaires ou des suggestions, n'hésitez pas à nous contacter.</p>
        <p>Email: <a href="mailto:contact@fakenewsdetector.com">contact@fakenewsdetector.com</a></p>
        <p>Retrouvez-nous sur les réseaux sociaux (à venir)</p>
        <p>Formulaire de contact (à venir).</p>
      </section>
    </div>
  );
};

export default ContactPage;
