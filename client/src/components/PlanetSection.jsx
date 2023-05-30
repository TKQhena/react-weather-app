import React from 'react';
import earthImage from '../img/Earth.png';
import '../App.css';
import marsImage from '../img/Mars.png';

function PlanetsSection() {
  return (
    <section className="planets-section">
      <h2 className="section-heading">Planets</h2>
      <div className="planet-cards">
        <div className="planet-card" style={{ backgroundColor: '#0012b2' }}>
          <img src={earthImage} alt="Earth" className="planet-image" />
        </div>
        <div className="planet-card" style={{ backgroundColor: '#ffd000' }}>
          <img src={marsImage} alt="Mars" className="planet-image" />
        </div>
      </div>
    </section>
  );
}

export default PlanetsSection;