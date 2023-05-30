import React from 'react';
import '../App.css';

function LocationSection() {
    return (
<div className="location-section">
      <h2 className="section-heading">Location</h2>
      <div className="input-container">
        <div className="input-row">
          <label>ZIP code:</label>
          <input type="text" id="zip-code" className="rounded-input" placeholder="Enter ZIP code" />
        </div>
        <div className="input-row">
          <label>Country:</label>
          <input type="text" id="country" className="rounded-input" placeholder="Enter country" />
        </div>
      </div>
    </div>
    );
  }
  
  export default LocationSection;