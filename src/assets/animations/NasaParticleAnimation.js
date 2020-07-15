import React from 'react';
import './NasaParticleAnimation.css'
import './Particle';

function NasaParticleAnimation() {
  return (
    <div>
        <script src="./Stats.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script> 
        <div id="particles-js"></div>
        <script src="./particles.js"></script>
        <script src="http://threejs.org/examples/js/libs/stats.min.js"></script>
        <div id="particles-js"></div> 
    </div>
  );
}

export default NasaParticleAnimation;