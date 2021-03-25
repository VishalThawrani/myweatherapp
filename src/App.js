import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './api/fetchweather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    
    const weatherSelector =  useSelector((state)=>state.weatherInfo);

    const dispatch = useDispatch();
    const weatherInfoAction = (query) => dispatch(fetchWeather(query));

    const search = async (e) => {
        if(e.key === 'Enter') {
          console.log(query,"city");
            weatherInfoAction(query);
            setQuery('');
        }
    }

    let details = "";
    if(weatherSelector && weatherSelector.hasOwnProperty("main")){
      details = <div className="city">
                  <h2 className="city-name">
                      <span>{weatherSelector && weatherSelector.name}</span>
                  </h2>
                  <div className="city-temp">
                      {Math.round(weatherSelector && weatherSelector.main && weatherSelector.main.temp)}
                      <sup>&deg;C</sup>
                  </div>
                </div>
   } else {
     details=<p>You need to type a valid city</p>
   }
    return (
        <div className="main-container">
            <input type="text" className="search" placeholder="Search city" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
            {weatherSelector && details}
        </div>
    );
}

export default App;