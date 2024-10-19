import React from 'react';

const Header = ({ language }) => {
  return (
    <header className="bg-dark text-white d-flex justify-content-between p-4">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            {language === 'pt' ? 'Daniel Marnet' : 'Daniel Marnet'}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
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
      </nav>
    </header>
  );
};

export default Header;
