import React from 'react';
import ReactGA from 'react-ga';

const FloatingButtons = ({ toggleLanguage, language }) => {
  // Função para imprimir a página
  const handlePrint = () => {
    // Ação 1: Rastrear o clique no Google Analytics
    ReactGA.event({
      category: 'Botão',
      action: 'Clique no Botão CV',
    });
    // Chama a função de impressão do navegador
    window.print();
  };

  // URL da página atual para compartilhar no WhatsApp
  const currentUrl = "https://edanielmarnet.github.io/cv/";

  return (
    <div className="floating-buttons no-print">

      {/* Botão para imprimir a página */}
      <button title={language === 'pt' ? 'Imprimir' : 'Print'} className="btn btn-primary" onClick={handlePrint}>
        <i className="bi bi-printer"></i>
      </button>
      
      {/* Botão para alternar idioma 
      <button title={language === 'pt' ? 'English' : 'Português'} className="btn btn-primary fs-6" onClick={toggleLanguage}>
        {language === 'pt' ? 'EN' : 'PT'}
      </button>*/}

      {/* Botão para compartilhar o link via WhatsApp */}
      <button
        title={language === 'pt' ? 'Compartilhar' : 'Share'}
        className="btn btn-success"
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?text=Daniel Marnet's CV: ${currentUrl}`,
            '_blank'
          )
        }
      >
        <i className="bi bi-share"></i>
      </button>

      {/* Botão para abrir o WhatsApp para contato */}
      <button
        title={language === 'pt' ? 'Daniel WhatsApp' : "Daniel's WhatsApp"}
        className="btn btn-success"
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?phone=5512991876096&text=Olá Daniel, eu vi seu CV e gostaria de entrar em contato.`,
            '_blank'
          )
        }
      >
        <i className="bi bi-whatsapp"></i>
      </button>

    </div>
  );
};

export default FloatingButtons;



