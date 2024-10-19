import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';
import Dashboard from './components/Dashboard';
//import './App.css';

const TRACKING_ID = "G-FH8YY22J8F"; // Substitua com o seu ID do Google Analytics

const App = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  // Estado para controlar o idioma (Português por padrão)
  const [language, setLanguage] = useState('pt');

  // Função para alternar o idioma
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  // Pegando o ano atual dinamicamente
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US'); // Obtém a data atual no formato local

  return (
    <div className="container-fluid m-0">
      <div className="row">
        <Header language={language} />
      </div>
      <div className="row">
        <div className="col mx-3 mt-3 p-3 border rounded">
          <About language={language} />
        </div>
      </div>
      <div className="row">
        <div className="col mx-3 mt-3 p-3 border rounded">
          <Skills language={language} />
        </div>
      </div>
      <div className="row">
        <div className="col mx-3 mt-3 p-3 border rounded">
          <Experience language={language} />
        </div>
      </div>
      <div className="row">
        <div className="col mx-3 mt-3 p-3 border rounded">
          <Projects language={language} />
        </div>
      </div>
      {/*
      <div className="row">
        <div className="col mx-3 mt-3 p-3 border rounded">
          <Dashboard language={language} />
        </div>
      </div>
      */}
      <div className="row">
        <div className="col mx-3 mt-3 p-3 border rounded">
          <Contact language={language} />
        </div>
      </div>

      <footer className="mt-3">
        <p>&copy;{currentYear} Daniel Marnet | Curriculum Vitae {currentDate}</p>
      </footer>

      {/* Botões flutuantes */}
      <FloatingButtons toggleLanguage={toggleLanguage} language={language} />
      
    </div>
  );
}

export default App;

