import React from 'react';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';


function LocationSection() {
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cityzip = `${zip},${country}`

    const options = {
      method: "GET",
      url: "http://localhost:8000/api",
      params: {
        zip: cityzip,
        units: "metric"
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)

      })
      .catch(function (error) {
        console.error(error);
      });
  }

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