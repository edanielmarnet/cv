import React from 'react';

const About = ({ language }) => {
  return (
    <section id="about">
      <h2>{language === 'pt' ? 'Sobre Mim' : 'About Me'}</h2>
      <p>
        {language === 'pt'
          ? 'Sou um desenvolvedor frontend especializado em React, com paixão por criar interfaces interativas e otimizadas. Tenho experiência em trabalhar com JavaScript, HTML, CSS e outras tecnologias do ecossistema frontend.'
          : 'I am a frontend developer specialized in React, passionate about creating interactive and optimized interfaces.'}
      </p>
    </section>
  );
};

export default About;
