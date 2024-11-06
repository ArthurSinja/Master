// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>SocorroAi</h1>
        <button className="assistant-button">🎤</button>
      </header>
      <button className="emergency-button">Emergência</button>
      <div className="library-section">
        <h2>Biblioteca de Procedimentos</h2>
        {/* Carousel com ícones dos procedimentos */}
      </div>
      <div className="videos-section">
        <h2>Vídeos Explicativos</h2>
        <button className="view-all-videos">Ver todos os vídeos</button>
      </div>
      <footer className="home-footer">
        <button>Treinamentos</button>
        <button>Minhas Emergências</button>
        <button>Perfil de Saúde</button>
      </footer>
    </div>
  );
};

export default Home;
