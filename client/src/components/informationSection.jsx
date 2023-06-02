import React from 'react';
import rainImg from '../img/rain.png';
import '../styles.css'

function InformationSection() {
    return (
        <section className="information-wrapper">
            <h2>Information</h2>
            <div className="information-div">
                <div className="rain-imageDiv">
                    <img id="image" src={rainImg} alt="Rain_img" />
                </div>
                <div className='information-container'>
                    <ul className='information-list'>
                        <li><span id="date">2 June 2023</span></li>
                        <li><span id="coverage">Looks rough, cloudy and rainy</span></li>
                        <li>Temperature: <span id="temperature">13 &deg C</span></li>
                        <li>Precipitation: <span id="precipitation">50%</span></li>
                        <li>Humidity: <span id="humidity">12%</span></li>
                        <li>Wind: <span id="wind">19 knots/hour</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default InformationSection;