import './App.css';
import background from './assets/background1.png';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AnalysisPage from './pages/Analysis/AnalysisPage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--global-background-image', `url(${background})`);
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analyse" element={<AnalysisPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
export default App;