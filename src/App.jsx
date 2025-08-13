import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TechStackSection from './components/TechStackSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TechStackSection />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
