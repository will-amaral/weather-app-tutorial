import Axios from 'axios';

export const owapi = Axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

// owapi.get('/onecall', {
//   params: {
//     lat: 1.20209,
//     lon: 1.23232,
//     exclude: 'minutely,daily',
//     appid: process.env.REACT_APP_API_KEY
//   }
// })

export const gapi;