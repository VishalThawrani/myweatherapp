import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'ffe01a2bdff16f872d0fcfda7d488274';

export function fetchWeather(query){
    return function(dispatch){
    axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })
    .then(Jsonres => {
        dispatch({type: "FETCH_WEATHER",
        payload: Jsonres});
    }).catch(err => {
        console.log("axios error");
        console.log(err);
    })
}
}