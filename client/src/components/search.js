import { useState } from "react";
import axios from 'axios'


function Search (){
    function onSearch(){
        axios.get('/').then((response) => {
            console.log(response.data)
        })
    }

    return(
        <div>
            <form action="/" method="get">
            <input type="text" name="cityname" id="cityname"/>
            <button onClick={onSearch()}>Search</button>
            </form>
        </div>
    )
}

export default Search;