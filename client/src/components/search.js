import React, { useState } from "react";
import axios from 'axios'



function Search (){
    const [citynamezip, setCityname] = useState('')
    const [weather, setWeather] = useState('')

    
    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(cityname)
        const options = {
          method: "GET",
          url: "http://localhost:8000/Search",
          params: {
            zip: citynamezip,
            units: "metric"
          },
        };
        axios
          .request(options)
          .then(function (response) {
            setWeather(response.data)
            
          })
          .catch(function (error) {
            console.error(error);
          });
        console.log(weather)
    }
    
    return(
        <div>
            <h1>Search City</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={cityname} onChange={(e) => setCityname(e.target.value)} />
                <input type="submit" value="Search" />
            </form>
            
        </div>
    )
}

export default Search;