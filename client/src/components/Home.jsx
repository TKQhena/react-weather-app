import React from 'react';
import Header from './Header.jsx';
import PlanetSection from './PlanetSection.jsx'
import LocationSection from './LocationSection.jsx'
import WeatherButton from './WeatherButton.jsx'

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

