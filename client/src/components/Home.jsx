import React from 'react';
import Header from './Header.jsx';
import '../App.css';
import PlanetSection from './PlanetSection.jsx'
import LocationSection from './LocationSection.jsx'

function Home() {
  return (
    <div >
      <Header />
      <PlanetSection />
      <LocationSection />
    </div>
  );
}

export default Home;

