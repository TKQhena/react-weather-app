import React from 'react';
import '../styles.css';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import rainImg from '../img/rain.png';
import sunImg from '../img/sunny.png'
import stormImg from '../img/storm.png'
import cloudyImg from '../img/cloudy.png'
import partCloudImg from '../img/partlycloudy.png'

function LocationSection() {
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [metric, setMetric] = useState('metric')
  const [weatherData, setWeatherData] = useState(null)
  const [cityname, setCityname] = useState('')
  const [tempsign,setTempsign] = useState('')
  const [speed, setSpeed] = useState('')
  const [scroll,setScroll] = useState(false)
  const pageEnd = useRef()
  
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(metric === 'metric'){
      setTempsign('°C')
      setSpeed('km/h')
    }else{
      setTempsign('°F')
      setSpeed('mph')
    }
    
    
    if (zip.length>0 && country.length>0 && cityname.length<=0) {
      const weatherOptions = {
        method: "GET",
        url: "http://localhost:5200/api/Search/zip",
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
            setWeatherData(response.data);
          }
        })
        .catch(function (error) {
          alert(`Location not found: Please check input data`);
        });
    }else if(cityname.length>0){
      const weatherOptions = {
        method: "GET",
        url: "http://localhost:5200/api/Search/city",

        params: {
          city: cityname,
          units: metric,
        },
      }
      console.log(weatherOptions.params);
      axios
        .request(weatherOptions)
        .then(function (response) {
          if (response.data.error) {
            alert("Location not found: Please check input data");
          } else {
            setWeatherData(response.data);
            setScroll(true)
          }
        })
        .catch(function (error) {
          alert("Location not found: Please check input data");
        });
    }      
  }

  useEffect(()=>{
    pageEnd.current.scrollIntoView({behavior:"smooth"})
    setScroll(false)
  },[scroll])


  function setImage(weatherId){
    
    const id = parseInt(weatherId);
    if(id<=232){
      return stormImg
    }
    else if(id<=531 && id>232){
      return rainImg
    }
    /* else if(id>=600 && id<=622){
      return snowImg

    } */
    else if(id>=700 && id<=781){
      return partCloudImg

    }
    else if(id === 800){
      return sunImg

    }
    else{
      return cloudyImg
    }
  }
  

  const metricUnit = [
    {
      label:"Celcius",
      value:"metric"
    },
    {
      label:"Fahrenheit",
      value:"Imperial"
    }
  ]

    return (
      <div>
        <div className="location-section">
          <h2 className="section-heading">Location</h2>
        </div>
      <form onSubmit={ handleSubmit }>
          <div className="input-container">
            <div className="input-row goRight">
              <label className="label-element">ZIP code: <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} className="rounded-input" placeholder="Enter ZIP code" /></label>
            </div>
            <div className="input-row">
              <label className="label-element">Country: <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="rounded-input" placeholder="Enter country" /></label>          
            </div>
          </div>
          <div className='input-row centre-input'>
              <label>Temp Units:</label>
              <Dropdown className="dropdown input"  options={metricUnit} value={metric} onChange={(e) => setMetric(e.value)} />
          </div>
          <br />
          <div className='input-row centre-input'>
              <label style={{display: 'block'}} className="label-element">City/Town name:</label>
              <input type="text" value={cityname} onChange={(e) => setCityname(e.target.value)} className="rounded-input" placeholder="Enter city (Optional)*" />
          </div>
          <br/>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10x' }}>
                <button className="view-button" type="submit">View Weather</button>
          </div>
      </form>

      {weatherData &&(
          <section className="information-wrapper">
            <h2>{weatherData.city.name}, {weatherData.city.country}</h2>
            <div className="information-div" id='weatherview'>
              <div className="rain-imageDiv">
                <img id="image" src={setImage(weatherData.list[0].weather[0].id)} alt="Rain_img" />
              </div>
              <div className='information-container'>
                <ul className='information-list'>
                  <li><span id="date">{weatherData.list[0].dt_txt}</span></li>
                  <li><span id="coverage">{weatherData.list[0].weather.main}, {weatherData.list[0].weather.description}</span></li>
                  <li>Temperature: <span id="temperature">{weatherData.list[0].main.temp.toFixed(0)}{tempsign}</span></li>
                  <li>Humidity: <span id="humidity">{weatherData.list[0].main.humidity}</span></li>
                  <li>Wind: <span id="wind">{weatherData.list[0].wind.speed} {speed} </span></li>
                </ul>
              </div>
            </div>
          </section>
          
      )}
      <div ref={pageEnd}></div>
      </div>
      
    );
  }
  
  export default LocationSection;