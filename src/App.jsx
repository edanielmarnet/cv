import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';
import './App.css';

function App() {
  // Estado para controlar o idioma (Português por padrão)
  const [language, setLanguage] = useState('pt');

  // Função para alternar o idioma
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  // Pegando o ano atual dinamicamente
  const currentYear = new Date().getFullYear();

  return (
    <div className="">
      <div className="">
        <Header language={language} />
        <div className="row">
          <div className="col m-4 p-3 border rounded">
            <About language={language} />
          </div>
          <div className="col m-4 p-3 border rounded">
            <Skills language={language} />
          </div>
        </div>
        <div className="row">
          <div className="col m-4 p-3 border rounded">
            <Experience language={language} />
          </div>
        </div>
        <div className="row">
          <div className="col m-4 p-3 border rounded">
            <Projects language={language} />
          </div>
        </div>
        <div className="row">
          <div className="col m-4 p-3 border rounded">
            <Contact language={language} />
          </div>
        </div>
        <footer>
          <p>&copy; {currentYear} Daniel Marnet</p>
        </footer>
      </div>

      {/* Botões flutuantes */}
      <FloatingButtons toggleLanguage={toggleLanguage} language={language} />
    </div>
  );
}

export default App;

