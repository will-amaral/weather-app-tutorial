import Axios from 'axios';

export const owapi = Axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export const gapi = Axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
});
