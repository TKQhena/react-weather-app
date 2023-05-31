import React from 'react';
import '../App.css'

const WeatherButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10x' }}>
      <button className="view-button">View Weather</button>
    </div>
  );
};

export default WeatherButton;