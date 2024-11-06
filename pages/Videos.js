// src/pages/Videos.js
import React from 'react';

const Videos = () => {
  return (
    <div className="videos-container">
      <h1>Vídeos Explicativos</h1>
      <div className="videos-grid">
        {/* Exemplo de vídeo com miniatura e título */}
        <div className="video-card">
          <img src="path_to_video_thumbnail" alt="Thumbnail do vídeo" />
          <p>Título do vídeo</p>
        </div>
      </div>
    </div>
  );
};

export default Videos;
