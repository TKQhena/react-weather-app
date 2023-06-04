import React from 'react';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


function LocationSection() {
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [metric, setMetric] = useState('metric')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const weatherOptions = {
      method: "GET",
      url: "http://localhost:5200/api/Search",
      params: {
        zip: `${zip},${country}`,
        units: metric,
      },
    };
    console.log(weatherOptions.params);
    axios
      .request(weatherOptions)
      .then(function (response) {
        if (response.data.error) {
          alert(`Location not found: Please check input data`);
        } else {
          console.log(response.data);
        }
      })
      .catch(function (error) {
        alert(`Location not found: Please check input data`);
      });
      
  }

  const metricUnit = [
    'metric','imperial'
  ]

    return (
      <form onSubmit={ handleSubmit }>
        <div className="location-section">
          <h2 className="section-heading">Location</h2>
          <div className="input-container">
            <div className="input-row">
              <label>ZIP code:</label>
              <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} className="rounded-input" placeholder="Enter ZIP code" />
            </div>
            <div className="input-row">
              <label>Country:</label>
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="rounded-input" placeholder="Enter country" />
            </div>
            <div className="input-row">
              <label>Temp Units:</label>
              <Dropdown options={metricUnit} value={metric} onChange={(e) => setMetric(e.value)} />
            </div>
            <div className="input-row">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10x' }}>
                <button className="view-button" type="submit">View Weather</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      
    );
  }
  
  export default LocationSection;