import React from 'react';
import earthImage from '../img/Earth.png';
import '../styles.css';
import marsImage from '../img/Mars.png';

function PlanetsSection() {
  return (
    <section className="planets-section">
      <h2 className="section-heading">Planet Earth</h2>
      <div className="planet-cards">
        <div className="planet-card" style={{ backgroundColor: '#0012b2' , width: '500px', height: '200px'}}>
          <img src={earthImage} alt="Earth" className="earth-image" />
        </div>
      </div>
    </section>
  );
}

export default PlanetsSection;