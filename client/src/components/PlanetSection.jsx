import React from 'react';
import earthImage from '../img/Earth.png';
import '../App.css';
import marsImage from '../img/Mars.png';

function PlanetsSection() {
  return (
    <section className="planets-section">
      <h2 className="section-heading">Planets</h2>
      <div className="planet-cards">
        <div className="planet-card" style={{ backgroundColor: '#0012b2' , width: '500px', height: '200px'}}>
          <img src={earthImage} alt="Earth" className="planet-image earth-image" />
        </div>
        <div className="planet-card" style={{ backgroundColor: '#ffd000' , width: '500px', height: '200px'}}>
          <img src={marsImage} alt="Mars" className="planet-image mars-image" />
        </div>
      </div>
    </section>
  );
}

export default PlanetsSection;