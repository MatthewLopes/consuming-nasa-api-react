import React from 'react';
import './About.css'
import '../../../assets/animations/NasaParticleAnimation';

function About() {
  return (
    <React.StrictMode>
      <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script> 
      <script src="./assets/animations/Particle.js"></script>
      <div id="particles-js"></div>
      <script src="particles.js"></script>
    </React.StrictMode>
  );
}

export default About;
