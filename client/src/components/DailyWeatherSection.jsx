import React from 'react';
import rainImg from '../img/rain.png';
import sunnyImg from '../img/sunny.png';
import '../styles.css'

function DailyWeatherSection(){
    return(
        <section className="daily-weather-section">
            <div>
                <div><span id="date">Date.now()</span></div>
                <div><img className="card-img" src={sunnyImg} alt="sunny_img" /></div>
                <div><span id="coverage">yea yea yea</span></div>
                <div><span id="temperature">temp</span></div>
            </div>
            <div>
                <div><span id="date">Date.now()</span></div>
                <div><img className="card-img" src={sunnyImg} alt="sunny_img" /></div>
                <div><span id="coverage">yea yea yea</span></div>
                <div><span id="temperature">temp</span></div>
            </div>
            <div>
                <div><span id="date">Date.now()</span></div>
                <div><img className="card-img" src={sunnyImg} alt="sunny_img" /></div>
                <div><span id="coverage">yea yea yea</span></div>
                <div><span id="temperature">temp</span></div>
            </div>
            <div>
                <div><span id="date">Date.now()</span></div>
                <div><img className="card-img" src={sunnyImg} alt="sunny_img" /></div>
                <div><span id="coverage">yea yea yea</span></div>
                <div><span id="temperature">temp</span></div>
            </div>
            <div>
                <div><span id="date">Date.now()</span></div>
                <div><img className="card-img" src={sunnyImg} alt="sunny_img" /></div>
                <div><span id="coverage">yea yea yea</span></div>
                <div><span id="temperature">temp</span></div>
            </div>
            <div>
                <div><span id="date">Date.now()</span></div>
                <div><img className="card-img" src={sunnyImg} alt="sunny_img" /></div>
                <div><span id="coverage">yea yea yea</span></div>
                <div><span id="temperature">temp</span></div>
            </div>
        </section>
    );
}

export default DailyWeatherSection;