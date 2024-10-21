import React from 'react';

const Header = ({ language }) => {
  return (
    <header className="bg-dark text-white p-4">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Alinhamento do nome à esquerda */}
            <a className="navbar-brand" href="/">
              {language === 'pt' ? 'Daniel Marnet' : 'Daniel Marnet'}
            </a>

            {/* Botão do menu (em telas pequenas) com flex-grow-0 */}
            <button
              className="navbar-toggler flex-grow-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Itens de navegação, alinhados à direita */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/edanielmarnet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github"></i>{language === 'pt' ? ' GitHub' : ' GitHub'}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/danielmarnet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>{language === 'pt' ? ' LinkedIn' : ' LinkedIn'}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    <i className="bi bi-envelope"></i>{language === 'pt' ? ' Contato' : ' Contact'}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
