import React, { useState, useEffect } from 'react';

import { Input, Table } from '../components/Forecast';
import { owapi } from '../utils/api';

function Forecast(props) {
  const { fetchLocation, setCoordinates, coordinates } = props;
  const [data, setData] = useState();
  const [message, setMessage] = useState('Get started');
  const [loading, setLoading] = useState(false);

  console.log(data);

  function formatWeatherInfo(weather) {
    const obj = {
      time: [],
      condition: [],
      temp: [],
      feelsLike: [],
      humidity: [],
    };

    weather.hourly.slice(0, 6).forEach((item) => {
      const { dt, weather, temp, feels_like: feelsLike, humidity } = item;
      const { main, icon } = weather[0];

      obj.time.push(dt);
      obj.condition.push(
        <img alt={main} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      );
      obj.temp.push(temp);
      obj.feelsLike.push(feelsLike);
      obj.humidity.push(humidity);
    });

    return obj;
  }

  async function fetchWeather({ lat, lon }, format) {
    setLoading(true);
    const params = {
      lat,
      lon,
      exclude: 'minutely,daily',
      appid: '980e6f231a670d3038538f9bfb1cc794',
      units: 'metric',
    };

    try {
      const { data: result } = await owapi.get('/onecall', { params });
      setData(format(result));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchWeather(coordinates, formatWeatherInfo);
  }, [coordinates]);

  return (
    <>
      <Input fetchLocation={fetchLocation} setCoordinates={setCoordinates} />
      {!data && <h3>{message}</h3>}
      {loading && <div>loading...</div>}
      {data && <Table data={data} />}
    </>
  );
}

Forecast.defaultProps = {
  coordinates: { lat: -23.223, lon: -45.917 },
};

export default Forecast;
